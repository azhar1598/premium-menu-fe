import React, { useState } from "react";

import {
  IconAward,
  IconCheck,
  IconClock,
  IconEdit,
  IconMapPin,
  IconPhone,
  IconPlus,
  IconQrcode,
  IconShare2,
  IconShoppingBag,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconMapPin,
    title: "Instant Store Locator",
    description:
      "Provide customers with precise location details, operating hours, and contact information with a single scan.",
  },
  {
    icon: IconShare2,
    title: "Easy Sharing",
    description:
      "Generate and share your store's digital profile across multiple platforms with a unique QR code.",
  },
  {
    icon: IconClock,
    title: "Real-Time Updates",
    description:
      "Instantly update store information without reprinting physical materials or changing existing QR codes.",
  },
];

const howItWorks = [
  {
    step: 1,
    icon: IconPlus,
    title: "Create Your Store Profile",
    description:
      "Input your store's details, including location, hours, contact info, and any special offerings.",
  },
  {
    step: 2,
    icon: IconQrcode,
    title: "Generate Unique QR Code",
    description:
      "Our system creates a custom QR code that links directly to your store's digital profile.",
  },
  {
    step: 3,
    icon: IconPhone,
    title: "Share & Engage",
    description:
      "Display the QR code in-store, on marketing materials, or online for customers to easily access information.",
  },
];

function Hero() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="relatidve py-4 lg:py-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-16  inset-0 bg-contain bg-center opacit0 z-0"
        style={{
          backgroundImage: `url('./assets/landing/bg4.jpeg')`,
        }}
      ></div>

      {/* Black Gradient Overlay (Only on Top) */}
      <div className="absolute top-16 t inset-x-0 h-full bg-gradient-to-b from-black/100 to-black-100 z-[1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-200 mb-4 lg:mb-6 leading-tight">
            Revolutionize Your Store's Digital Presence
          </h2>
          <p className="text-base lg:text-xl text-gray-200 max-w-3xl mx-auto">
            Storekode transforms how customers discover and interact with your
            business through smart, dynamic QR code technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="bg-white rounded-full p-2 flex space-x-2 shadow-md">
            <button
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full transition text-sm lg:text-base ${
                activeTab === "features"
                  ? "bg-orange-600 text-white"
                  : "text-gray-600 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full transition text-sm lg:text-base ${
                activeTab === "how-it-works"
                  ? "bg-orange-600 text-white"
                  : "text-gray-600 hover:bg-orange-50"
              }`}
              onClick={() => setActiveTab("how-it-works")}
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Features Section */}
        {activeTab === "features" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                    <feature.icon className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* How It Works Section */}
        {activeTab === "how-it-works" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                    <div className="text-orange-600 text-xl lg:text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
