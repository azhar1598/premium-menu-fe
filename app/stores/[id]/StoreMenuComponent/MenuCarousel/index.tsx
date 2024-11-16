import React from "react";
import { Carousel } from "@mantine/carousel";
import { rem, Text } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCurrencyRupee,
} from "@tabler/icons-react";
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

const BASE_PRODUCTS_PER_PAGE = 14;

const sampleStoreDetail = {
  websiteTheme: {
    primaryColor: "#FF4D4D",
  },
  categoryProducts: [
    {
      categoryName: "Chicken",
      categoryImages: [
        "https://i.ytimg.com/vi/oskLFFcvhGI/maxresdefault.jpg",
        "https://i.ytimg.com/vi/oskLFFcvhGI/maxresdefault.jpg",
      ],
      categoryType: "non-veg",
      products: [
        { name: "Chicken Biryani", price: "199" },
        { name: "Butter Chicken", price: "249" },
        { name: "Chicken 65", price: "179" },
        { name: "Chicken Tikka", price: "219" },
        { name: "Tandoori Chicken", price: "299" },
        { name: "Chicken Kebab", price: "189" },
        { name: "Chicken Curry", price: "169" },
        { name: "Chicken Fried Rice", price: "159" },
        { name: "Chicken Noodles", price: "149" },
        { name: "Chicken Manchurian", price: "179" },
        { name: "Chicken Curry", price: "169" },
        { name: "Chicken Fried Rice", price: "159" },
        { name: "Chicken Noodles", price: "149" },
        { name: "Chicken Manchurian", price: "179" },
      ],
    },
    {
      categoryName: "Mutton",
      categoryImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL64QU2oeAYPk289-33qxDbTyU6m0R6o13TQ&s",
        "https://example.com/mutton-curry.jpg",
      ],
      categoryType: "non-veg",
      products: [
        { name: "Mutton Biryani", price: "299" },
        { name: "Mutton Curry", price: "279" },
        { name: "Mutton Rogan Josh", price: "289" },
        { name: "Mutton Kebab", price: "249" },
        { name: "Mutton Soup", price: "169" },
        { name: "Mutton Fry", price: "259" },
        { name: "Mutton Fry", price: "259" },
        { name: "Mutton Fry", price: "259" },
      ],
    },
    {
      categoryName: "Vegetarian",
      categoryImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2rLOoHQ5hilftZ7TUyaFtWDiNavOLxfbXw&s",
        "https://example.com/veg-biryani.jpg",
      ],
      categoryType: "veg",
      products: [
        { name: "Paneer Butter Masala", price: "179" },
        { name: "Veg Biryani", price: "149" },
        { name: "Dal Makhani", price: "139" },
        { name: "Mixed Veg Curry", price: "129" },
        { name: "Palak Paneer", price: "169" },
        { name: "Malai Kofta", price: "189" },
        { name: "Veg Manchurian", price: "149" },
        { name: "Mushroom Masala", price: "159" },
        { name: "Chana Masala", price: "129" },
        { name: "Aloo Gobi", price: "119" },
        { name: "Jeera Rice", price: "99" },
        { name: "Veg Fried Rice", price: "129" },
      ],
    },
    {
      categoryName: "Breads",
      categoryImages: [
        "https://hips.hearstapps.com/hmg-prod/images/types-of-bread-1666723473.jpg",
        "https://example.com/roti.jpg",
      ],
      categoryType: "veg",
      products: [
        { name: "Butter Naan", price: "39" },
        { name: "Plain Naan", price: "35" },
        { name: "Garlic Naan", price: "45" },
        { name: "Tandoori Roti", price: "25" },
        { name: "Butter Roti", price: "30" },
        { name: "Butter Naan", price: "39" },
        { name: "Plain Naan", price: "35" },
        { name: "Garlic Naan", price: "45" },
        { name: "Tandoori Roti", price: "25" },
        { name: "Butter Roti", price: "30" },
        { name: "Butter Naan", price: "39" },
        { name: "Plain Naan", price: "35" },
        { name: "Garlic Naan", price: "45" },
        { name: "Tandoori Roti", price: "25" },
        { name: "Butter Roti", price: "30" },
      ],
    },
  ],
};

const MenuCarousel = ({ storeDetail }: { storeDetail: any }) => {
  const prepareSlides = () => {
    const slides = [];
    let totalProductCount = 0;
    let currentSlideCategories = [];
    let remainingCategories = [...sampleStoreDetail.categoryProducts];
    let isFirstAppearance = true;

    while (remainingCategories.length > 0) {
      const currentCategory = remainingCategories[0];

      let currentProductsPerPage = BASE_PRODUCTS_PER_PAGE;

      if (
        slides.length === 0 &&
        currentCategory.products.length <= BASE_PRODUCTS_PER_PAGE
      ) {
        if (remainingCategories.length > 1) {
          currentProductsPerPage = 14;
        }
      }

      const productsLeft = currentProductsPerPage - totalProductCount;

      if (currentCategory.products.length <= productsLeft) {
        currentSlideCategories.push({
          ...currentCategory,
          products: currentCategory.products,
          isContinuation: !isFirstAppearance,
        });
        totalProductCount += currentCategory.products.length;
        remainingCategories.shift();
        isFirstAppearance = true;
      } else {
        const firstPart = {
          ...currentCategory,
          products: currentCategory.products.slice(0, productsLeft),
          isContinuation: !isFirstAppearance,
        };
        const remainingPart = {
          ...currentCategory,
          products: currentCategory.products.slice(productsLeft),
          isContinuation: true,
        };

        currentSlideCategories.push(firstPart);
        remainingCategories[0] = remainingPart;
        totalProductCount += productsLeft;
        isFirstAppearance = false;
      }

      if (
        totalProductCount >= currentProductsPerPage ||
        remainingCategories.length === 0
      ) {
        slides.push(currentSlideCategories);
        currentSlideCategories = [];
        totalProductCount = 0;
      }
    }

    return slides;
  };

  return (
    <Carousel
      withIndicators
      height="100vh"
      initialSlide={0}
      // loop
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
        <IconArrowRight
          style={{
            width: rem(16),
            height: rem(16),
          }}
        />
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
