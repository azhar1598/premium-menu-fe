"use client";
import React, { useEffect, useState } from "react";
import DisplayImage from "../public/assets/auth/rest2.jpg";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import { GetStaticPaths, GetStaticProps } from "next";
import ContactSection from "@/components/ContactSection";
import { Badge, Box, Group, Text } from "@mantine/core";
import store from "@/redux/store";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

const HomeComponent = ({ storeDetail }: any) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  console.log("storeDetail-->", storeDetail);

  const [storeInfo, setStoreInfo] = useState({
    menuImages: [
      "https://marketplace.canva.com/EAFwRADHMsM/1/0/1035w/canva-orange-and-black-bold-geometric-restaurant-menu-AX4bhelWqNA.jpg",
      "https://marketplace.canva.com/EAFZawUn7mU/1/0/1131w/canva-black-and-red-modern-food-menu-bu62Mi5HBkk.jpg",
    ],
  });

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (!showCarousel) return;

      switch (e.key) {
        case "ArrowRight":
          setSelectedImageIndex((prev) =>
            prev === (storeInfo?.menuImages?.length || 0) - 1 ? 0 : prev + 1
          );
          break;
        case "ArrowLeft":
          setSelectedImageIndex((prev) =>
            prev === 0 ? (storeInfo?.menuImages?.length || 0) - 1 : prev - 1
          );
          break;
        case "Escape":
          setShowCarousel(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showCarousel, storeInfo?.menuImages?.length]);

  return (
    <div>
      <div className="relative">
        <Image
          src={"/assets/auth/rest2.jpg"}
          width={100}
          height={100}
          alt="Restaurant Banner"
          className="w-full h-[100vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/80" />
      </div>

      {/* Centered Content Container */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center justify-center">
        {/* Logo Container */}
        {/* <div className="bg-white w-12 p-2 rounded-lg mx-auto mb-6"> */}
        <div className="w-32 h-32 flex items-center justify-center">
          <Image
            src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
            width={220}
            height={220}
            alt="logo"
          />
        </div>
        {/* </div> */}

        {/* Restaurant Name and Tagline */}
        <div className="text-white mb-6">
          <h2 className="text-lg text-white font-medium">
            {storeDetail?.name}
          </h2>
          <p className="text-sm text-gray-400">{storeDetail?.tagline}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            className="bg-orange-500 text-white w-72 py-2 mt-6 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            onClick={() => setShowCarousel(true)}
          >
            View Menu
          </button>

          {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-72 mx-auto">
            <h3 className="text-white font-medium mb-2">Hours</h3>
            <div className="text-gray-200 space-y-1 text-sm">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-72 mx-auto">
            <h3 className="text-white font-medium mb-2">Location</h3>
            <p className="text-gray-200 text-sm">IVth Phase, 507002</p>
          </div> */}
        </div>

        {/* Contact Section if needed */}
        <div className="">
          <ContactSection storeDetail={storeDetail} />
        </div>
      </div>

      {showCarousel && (
        <ImageCarousel
          images={storeInfo?.menuImages}
          currentIndex={selectedImageIndex}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </div>
  );
};

export default HomeComponent;
