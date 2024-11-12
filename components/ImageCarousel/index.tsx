import React, { useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
// import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { useDisclosure } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

const ImageCarousel = ({ images, currentIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [opened, { open, close }] = useDisclosure(false);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // Also allows swiping on desktop
  });

  return (
    <Carousel
      withIndicators
      // height={600}
      // slideSize="200%%"
      // slideGap="md"
      p={10}
      // loop
      align="start"
      slidesToScroll={1}
      dragFree
      slideGap="md"
    >
      {images.map((image, index: number) => (
        <Carousel.Slide key={index} w={"100%"}>
          <div className="bg-red-300 ">
            {" "}
            <Image src={image} alt="" className="w-full " />
            {/* {index} */}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
