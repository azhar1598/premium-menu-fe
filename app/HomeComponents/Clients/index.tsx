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
  IconHome2,
} from "@tabler/icons-react";

const ClientsData = [
  {
    name: "Honey World",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Taqwa Jewellers by MKZ",
    category: "Jewelry",
    icon: IconJewishStar,
    bgColor: "bg-amber-600",
  },
  {
    name: "Rushi Computers",
    category: "Electronics",
    icon: IconDeviceLaptop,
    bgColor: "bg-blue-500",
  },
  {
    name: "Boyz Zone Premium",
    category: "Fashion",
    icon: IconShirt,
    bgColor: "bg-purple-500",
  },
  {
    name: "JS BAZAR Home Needs",
    category: "Home Needs",
    icon: IconShoppingCart,
    bgColor: "bg-green-600",
  },
  {
    name: "Hanu King's Biryani",
    category: "Restaurants",
    icon: IconHome2,
    bgColor: "bg-red-500",
  },
  {
    name: "Apsara Badam Milk Since 1972",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Shaheen Fashions",
    category: "Fashion",
    icon: IconShirt,
    bgColor: "bg-purple-500",
  },
  {
    name: "Go Computers",
    category: "Electronics",
    icon: IconDeviceLaptop,
    bgColor: "bg-blue-500",
  },
  {
    name: "Sheel Kamal Restaurant",
    category: "Restaurants",
    icon: IconHome2,
    bgColor: "bg-red-500",
  },
  {
    name: "Pulavs by One Kitchen",
    category: "Food & Beverages",
    icon: IconToolsKitchen2,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Aashish Mobiles",
    category: "Electronics",
    icon: IconDeviceMobile,
    bgColor: "bg-blue-500",
  },
  {
    name: "Taqwa Jewellers by MKZ",
    category: "Jewelry",
    icon: IconJewishStar,
    bgColor: "bg-amber-600",
  },
  {
    name: "My Circuit City",
    category: "Electronics",
    icon: IconDeviceLaptop,
    bgColor: "bg-blue-500",
  },
];

function Clients() {
  const mobile = useMediaQuery("(max-width: 768px)");
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <div className="px-8 py-12 bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-500 w-full text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
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
            <div className="flex flex-col items-center justify-center h-64 bg-white text-gray-900 rounded-lg border border-gray-200 shadow-md hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:text-white transition duration-300 px-6 py-4">
              {/* Circular Icon Background */}
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full ${client.bgColor} shadow-md mb-3`}
              >
                <client.icon
                  className="h-8 w-8 text-white"
                  aria-label={`${client.category} icon`}
                />
              </div>
              <p className="text-lg font-bold uppercase tracking-wider text-center mb-1">
                {client.name}
              </p>
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
