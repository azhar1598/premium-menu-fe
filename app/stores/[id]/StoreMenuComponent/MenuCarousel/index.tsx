import React from "react";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { MenuCard } from "./MenuCard";

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

const MAX_CATEGORIES_PER_SLIDE = 2;
const PRODUCTS_PER_CATEGORY = 7; // Split 14 products between two categories

const MenuCarousel = ({ storeDetail }: { storeDetail: any }) => {
  const prepareSlides = () => {
    const slides: CategoryProduct[][] = [];
    let remainingCategories = [...storeDetail.productCategories];

    while (remainingCategories.length > 0) {
      let currentSlideCategories: CategoryProduct[] = [];
      let categoriesInCurrentSlide = 0;

      while (
        categoriesInCurrentSlide < MAX_CATEGORIES_PER_SLIDE &&
        remainingCategories.length > 0
      ) {
        const currentCategory = remainingCategories[0];
        const isFirstCategory = categoriesInCurrentSlide === 0;
        const isLastCategory = remainingCategories.length === 1;

        // If this is the only category left, it can use all 14 slots
        const maxProductsForThisCategory = isLastCategory
          ? 14
          : isFirstCategory
          ? Math.min(currentCategory.products.length, PRODUCTS_PER_CATEGORY)
          : PRODUCTS_PER_CATEGORY;

        if (currentCategory.products.length <= maxProductsForThisCategory) {
          // Add entire category if it fits
          currentSlideCategories.push({
            ...currentCategory,
            products: currentCategory.products,
            isContinuation: currentCategory.isContinuation || false,
          });
          remainingCategories.shift();
        } else {
          // Split category if it doesn't fit
          const firstPart: CategoryProduct = {
            ...currentCategory,
            products: currentCategory.products.slice(
              0,
              maxProductsForThisCategory
            ),
            isContinuation: currentCategory.isContinuation || false,
          };

          const remainingPart: CategoryProduct = {
            ...currentCategory,
            products: currentCategory.products.slice(
              maxProductsForThisCategory
            ),
            isContinuation: true,
          };

          currentSlideCategories.push(firstPart);
          remainingCategories[0] = remainingPart;
        }

        categoriesInCurrentSlide++;

        // If this category used all 14 slots, break the loop
        if (maxProductsForThisCategory === 14) {
          break;
        }
      }

      slides.push(currentSlideCategories);
    }

    return slides;
  };

  return (
    <Carousel
      withIndicators
      height="100vh"
      initialSlide={0}
      align="start"
      controlSize={8}
      slidesToScroll={1}
      styles={{
        root: { width: "100%" },
        viewport: { height: "100%" },
        container: { height: "100%" },
        slide: { height: "100%", width: "100%" },
        indicators: { bottom: "2rem" },
      }}
      nextControlIcon={
        <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
      }
      previousControlIcon={
        <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
      }
    >
      {prepareSlides().map((slideCategories, index) => (
        <Carousel.Slide key={index}>
          <MenuCard storeDetail={storeDetail} categories={slideCategories} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default MenuCarousel;
