import React from "react";
import { Carousel } from "@mantine/carousel";
import MenuCard from "./MenuCard";

const MenuCarousel = ({ storeDetail }: any) => {
  return (
    <Carousel
      withIndicators
      height="100vh"
      initialSlide={0}
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
          <MenuCard title={"OUR MENU"} storeDetail={storeDetail} />
        </div>
      </Carousel.Slide>
      <Carousel.Slide key={2}>
        <div className="h-full w-full overflow-auto">
          <MenuCard />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default MenuCarousel;
