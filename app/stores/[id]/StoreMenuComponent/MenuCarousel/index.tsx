import React, { useMemo, useCallback, useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import { rem, Skeleton } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { MenuCard } from "./MenuCard";
import SkeletonLoader from "@/components/common/Loader";
// import { storeDetail } from "@/lib/constants";

interface Product {
  name: string;
  price: string;
}

interface CategoryProduct {
  categoryName: string;
  categoryImages: string[];
  categoryType: string;
  products: Product[];
  isContinuation?: boolean;
}

interface StoreDetail {
  productCategories: CategoryProduct[];
}

const MAX_CATEGORIES_PER_SLIDE = 2;
const PRODUCTS_PER_CATEGORY = 10;
const SLIDES_TO_PRELOAD = 2; // Number of slides to preload in each direction

const MenuCarousel = ({ storeDetail }: { storeDetail: StoreDetail }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleSlideIndices, setVisibleSlideIndices] = useState<number[]>([]);

  // Memoize the slide preparation for better performance
  const { slides, totalProducts } = useMemo(() => {
    if (!Array.isArray(storeDetail?.productCategories)) {
      return { slides: [], totalProducts: 0 };
    }

    let totalProducts = 0;
    const slides: CategoryProduct[][] = [];

    // Pre-calculate total products for optimization
    storeDetail.productCategories.forEach((category) => {
      totalProducts += category.products?.length || 0;
    });

    // Estimate number of slides needed to prevent array resizing
    const estimatedSlides = Math.ceil(totalProducts / 14);
    slides.length = estimatedSlides;

    let currentSlide: CategoryProduct[] = [];
    let productsInCurrentSlide = 0;
    let slideIndex = 0;

    // O(n) complexity where n is the number of categories
    for (const category of storeDetail.productCategories) {
      if (!category.products?.length) continue;

      let remainingProducts = [...category.products];
      let isContinuation = category.isContinuation || false;

      while (remainingProducts.length > 0) {
        const availableSpace = 14 - productsInCurrentSlide;
        const productsToTake = Math.min(
          remainingProducts.length,
          currentSlide.length < MAX_CATEGORIES_PER_SLIDE
            ? PRODUCTS_PER_CATEGORY
            : availableSpace
        );

        if (productsToTake <= 0) {
          slides[slideIndex] = currentSlide;
          currentSlide = [];
          productsInCurrentSlide = 0;
          slideIndex++;
          continue;
        }

        const categorySlice: CategoryProduct = {
          ...category,
          products: remainingProducts.slice(0, productsToTake),
          isContinuation,
        };

        currentSlide.push(categorySlice);
        remainingProducts = remainingProducts.slice(productsToTake);
        productsInCurrentSlide += productsToTake;
        isContinuation = true;

        if (
          productsInCurrentSlide >= 14 ||
          currentSlide.length >= MAX_CATEGORIES_PER_SLIDE
        ) {
          slides[slideIndex] = currentSlide;
          currentSlide = [];
          productsInCurrentSlide = 0;
          slideIndex++;
        }
      }
    }

    // Add any remaining categories in the last slide
    if (currentSlide.length > 0) {
      slides[slideIndex] = currentSlide;
    }

    // Trim any empty slots we pre-allocated
    return { slides: slides.filter(Boolean), totalProducts };
  }, [storeDetail?.productCategories]);

  // Optimize which slides are rendered based on current index
  useEffect(() => {
    const indices = [];
    for (let i = -SLIDES_TO_PRELOAD; i <= SLIDES_TO_PRELOAD; i++) {
      const index = currentSlideIndex + i;
      if (index >= 0 && index < slides.length) {
        indices.push(index);
      }
    }
    setVisibleSlideIndices(indices);
  }, [currentSlideIndex, slides.length]);

  // Memoize slide change handler
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

  // Early return for empty data
  if (!slides.length) return null;

  const carouselStyles = {
    root: { width: "100%" },
    viewport: { height: "100%" },
    container: { height: "100%" },
    slide: { height: "100%", width: "100%" },
    indicators: { bottom: "2rem" },
  };

  return (
    <Carousel
      withIndicators
      height="100vh"
      initialSlide={0}
      align="start"
      controlSize={8}
      slidesToScroll={1}
      styles={carouselStyles}
      onSlideChange={handleSlideChange}
      nextControlIcon={
        <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
      }
      previousControlIcon={
        <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
      }
    >
      {slides.map((slideCategories, index) =>
        // Only render slides that are visible or about to become visible
        visibleSlideIndices.includes(index) ? (
          <Carousel.Slide key={`slide-${index}`}>
            <MenuCard storeDetail={storeDetail} categories={slideCategories} />
          </Carousel.Slide>
        ) : (
          // Render empty placeholder for non-visible slides
          <Carousel.Slide key={`slide-${index}`}>
            <SkeletonLoader />
          </Carousel.Slide>
        )
      )}
    </Carousel>
  );
};

// Prevent unnecessary re-renders
export default React.memo(MenuCarousel);
