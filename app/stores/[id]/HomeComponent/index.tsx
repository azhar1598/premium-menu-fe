"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ContactSection from "@/components/ContactSection";

const HomeComponent = ({ storeDetail }: any) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [storeInfo, setStoreInfo] = useState({
    menuImages: [
      "https://marketplace.canva.com/EAFwRADHMsM/1/0/1035w/canva-orange-and-black-bold-geometric-restaurant-menu-AX4bhelWqNA.jpg",
      "https://marketplace.canva.com/EAFZawUn7mU/1/0/1131w/canva-black-and-red-modern-food-menu-bu62Mi5HBkk.jpg",
    ],
  });

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={"/assets/auth/rest2.jpg"}
          width={100}
          height={100}
          alt="Restaurant Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/80" />

        {/* Centered Content Container */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center justify-center">
          <div className="w-32 h-32 flex items-center justify-center">
            <Image
              src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
              width={220}
              height={220}
              alt="logo"
            />
          </div>

          <div className="text-white mb-6">
            <h2 className="text-lg text-white font-medium">
              {storeDetail?.name}
            </h2>
            <p className="text-sm text-gray-400">{storeDetail?.tagline}</p>
          </div>

          <div className="space-y-4">
            <button
              className="bg-orange-500 text-white w-72 py-2 mt-6 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => setShowCarousel(true)}
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section with Different Background */}
      <section className="relative h-screen">
        <Image
          src={"/assets/auth/rest3.jpg"}
          width={100}
          height={100}
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg">
              {storeDetail?.description || "Welcome to our restaurant"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Different Background */}
      <section className="relative h-screen">
        <Image
          src={"/assets/auth/rest4.jpg"}
          width={100}
          height={100}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <ContactSection storeDetail={storeDetail} />
          </div>
        </div>
      </section>

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
