import React, { useState, useEffect } from "react";
import { Card, Group, Text, Modal } from "@mantine/core";
import {
  IconChevronRight,
  IconClock,
  IconMapPin,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconX,
  IconChevronLeft,
} from "@tabler/icons-react";
import Image from "next/image";

const ImageCarousel = ({ images, currentIndex, onClose }: any) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const goToNext = (e: any) => {
    e.stopPropagation();
    setActiveIndex((prev: any) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = (e: any) => {
    e.stopPropagation();
    setActiveIndex((prev: any) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <IconX size={24} />
        </button>

        {/* Previous button */}
        <button
          onClick={goToPrev}
          className="absolute left-4 z-10 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <IconChevronLeft size={24} />
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="absolute right-4 z-10 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <IconChevronRight size={24} />
        </button>

        {/* Image */}
        <div className="w-full h-full p-12 flex items-center justify-center">
          <Image
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            width={600}
            height={500}
            className="max-w-full max-h-full object-contain"
            onClick={(e: any) => e.stopPropagation()}
          />
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={(e: any) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "w-4 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
