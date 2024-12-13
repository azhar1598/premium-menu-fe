"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconShoppingCart,
  IconJewishStar,
  IconDeviceLaptop,
  IconShirt,
  IconToolsKitchen2,
  IconDeviceMobile,
  IconHotelService,
} from "@tabler/icons-react";

const ClientsData = [
  {
    name: "Honey World",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    color: "text-yellow-500",
  },
  {
    name: "Taqwa Jewellers by MKZ",
    category: "Jewelry",
    icon: IconJewishStar,
    color: "text-amber-600",
  },
  {
    name: "Rushi Computers",
    category: "Electronics",
    icon: IconDeviceLaptop,
    color: "text-blue-500",
  },
  {
    name: "Go Computers",
    category: "Electronics",
    icon: IconDeviceLaptop,
    color: "text-blue-500",
  },
  {
    name: "Boyz Zone Premium",
    category: "Fashion",
    icon: IconShirt,
    color: "text-purple-500",
  },
  {
    name: "Shaheen Fashions",
    category: "Fashion",
    icon: IconShirt,
    color: "text-purple-500",
  },
  {
    name: "JS BAZAR Home Needs",
    category: "Home Needs",
    icon: IconShoppingCart,
    color: "text-green-600",
  },
  {
    name: "Hanu King's Biryani",
    category: "Restaurants",
    icon: IconHotelService,
    color: "text-red-500",
  },
  {
    name: "Sheel Kamal Restaurant",
    category: "Restaurants",
    icon: IconHotelService,
    color: "text-red-500",
  },
  {
    name: "Apsara Badam Milk Since 1972",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    color: "text-yellow-500",
  },
  {
    name: "I Care Mobile Solutions",
    category: "Electronics",
    icon: IconDeviceMobile,
    color: "text-blue-500",
  },
  {
    name: "Pulavs by One Kitchen",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    color: "text-yellow-500",
  },
  {
    name: "My Circuit City",
    category: "Electronics",
    icon: IconDeviceLaptop,
    color: "text-blue-500",
  },
  {
    name: "Aashish Mobiles",
    category: "Electronics",
    icon: IconDeviceMobile,
    color: "text-blue-500",
  },
];

function Clients() {
  const mobile = useMediaQuery("(max-width: 768px)");
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="px-8 py-12 bg-gradient-to-br from-indigo-500 via-teal-500 to-blue-400 w-full text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Trusted Clients
      </h1>
      <Carousel
        withIndicators={false}
        slideSize={mobile ? "100%" : "20%"}
        slideGap="sm"
        loop
        dragFree
        align="center"
        slidesToScroll={mobile ? 1 : 1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {ClientsData.map((client, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center justify-center h-36 bg-white text-gray-900 rounded-lg border border-gray-200 shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-500 hover:text-white transition duration-300 px-4 py-2">
              <p className="text-lg font-bold uppercase tracking-wider text-center mb-2">
                {client.name}
              </p>
              <client.icon
                className={`h-8 w-8 mb-2 ${client.color}`}
                aria-label={`${client.category} icon`}
              />
              <p className="text-sm font-medium text-center">
                {client.category}
              </p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default Clients;
