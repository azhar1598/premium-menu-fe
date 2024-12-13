import React from "react";
import { Star, ShoppingBag, Store } from "lucide-react";
import Header from "./HomeComponents/Header";
import Hero from "./HomeComponents/Hero";
import Industries from "./HomeComponents/Industries";
import Features from "./HomeComponents/Features";
import Footer from "./HomeComponents/Footer/page";
import Clients from "./HomeComponents/Clients";
import Link from "next/link";

const StoreKodeLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header />
      <Hero />
      <Features />
      <Clients />
      <Industries />

      {/* Hero Section */}

      {/* Store Types */}

      {/* Features */}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-5">
        <h2 className="text-4xl font-bold mb-6">
          Start Your Digital Store Journey Today
        </h2>
        <p className="text-xl mb-8">
          No technical skills required. Launch your dream store in minutes.
        </p>
        <Link
          href={"/contact"}
          className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
        >
          Get Started for Free
        </Link>
      </section>
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default StoreKodeLandingPage;
