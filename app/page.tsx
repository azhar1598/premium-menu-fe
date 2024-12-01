"use client";
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
import Header from "./HomeComponents/Header";
import Hero from "./HomeComponents/Hero";
import Benefits from "./HomeComponents/Benefits";
import Testimonials from "./HomeComponents/Testimonials";
import Pricing from "./HomeComponents/Pricing";
import GoodHands from "./HomeComponents/GoodHands";
import Footer from "./HomeComponents/Footer/page";
import BusinessTypes from "./HomeComponents/BusinessTypes";
import Hero2 from "./HomeComponents/Hero2";

const StorekodeLandingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col">
        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
          <Hero2 />
          {/* Benefits Section */}
          <Benefits />
          <GoodHands />
          <Testimonials />
          <BusinessTypes />
          <Pricing />
          {/* Pricing Section */}
        </main>

        {/* Call to Action */}
        <section className="bg-orange-600 text-white py-12 lg:py-16 text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Transform Your Store's Digital Presence?
          </h2>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Join Storekode today and start connecting with customers like never
            before.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-orange-600 px-6 lg:px-8 py-2 lg:py-3 rounded-lg hover:bg-orange-50 transition text-sm lg:text-base">
              Start Free
            </button>
            <button className="border border-white text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg hover:bg-orange-700 transition text-sm lg:text-base">
              Learn More
            </button>
          </div>
        </section>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default StorekodeLandingPage;
