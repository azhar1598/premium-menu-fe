import React from "react";
import { Carousel } from "@mantine/carousel";
import RestaurantMenu2 from "@/app/new-page/RestautrantMenu2";

interface ImageCarouselProps {
  images: string[];
  currentIndex?: number;
  onClose?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  currentIndex = 0,
  onClose,
}) => {
  return (
    <Carousel
      withIndicators
      height="100vh"
      initialSlide={currentIndex}
      loop
      align="start"
      slidesToScroll={1}
      styles={{
        root: {
          width: "100%",
        },
        viewport: {
          height: "100%",
        },
        container: {
          height: "100%",
        },
        slide: {
          height: "100%",
          width: "100%",
        },
        indicators: {
          bottom: "2rem",
        },
      }}
    >
      <Carousel.Slide key={1}>
        <div className="h-full w-full overflow-auto">
          <RestaurantMenu2 title={"OUR MENU"} />
        </div>
      </Carousel.Slide>
      <Carousel.Slide key={2}>
        <div className="h-full w-full overflow-auto">
          <RestaurantMenu2 />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ImageCarousel;
