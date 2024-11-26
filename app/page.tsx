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

const StorekodeLandingPage = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cafe Owner",
      quote:
        "Storekode has revolutionized how we connect with our customers. It's so easy to update our information!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Mike Rodriguez",
      role: "Retail Store Manager",
      quote:
        "Our customer engagement has increased significantly since using Storekode. Highly recommended!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Emily Chen",
      role: "Small Business Owner",
      quote:
        "The QR code solution is simple, elegant, and has helped us modernize our business presence.",
      image: "/api/placeholder/100/100",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Single Store Profile",
        "Basic QR Code Generation",
        "Limited Updates",
        "Community Support",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Multiple Store Profiles",
        "Advanced QR Code Customization",
        "Unlimited Real-Time Updates",
        "Priority Support",
        "Analytics Dashboard",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited Store Profiles",
        "Custom Branding",
        "API Access",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "White-Label Solutions",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col">
      {/* Mobile Navigation Toggle */}
      <nav className="px-4 py-4 flex justify-between items-center shadow-sm bg-white lg:px-8">
        <div className="flex items-center space-x-3">
          <IconQrcode className="text-orange-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">Storekode</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
            How It Works
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button className="w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
              How It Works
            </button>
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
            Revolutionize Your Store's Digital Presence
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
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

        {/* Benefits Section */}
        <section className="mt-16 lg:mt-24 bg-white rounded-xl shadow-lg p-6 lg:p-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
              Why Choose Storekode?
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a QR code generator. We're your digital
              business companion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-start space-x-4">
              <IconAward className="text-orange-600 mt-1" size={28} />
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800">
                  Easy to Use
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Create and manage your digital store profile in minutes, no
                  technical skills required.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <IconShoppingBag className="text-orange-600 mt-1" size={28} />
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800">
                  Boost Customer Engagement
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Provide instant access to store information, menus,
                  promotions, and more.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <IconCheck className="text-orange-600 mt-1" size={28} />
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800">
                  Always Up-to-Date
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Update your information in real-time without changing physical
                  materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 lg:p-16 mb-16 lg:my-24 mt-12">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from businesses that have transformed their digital
              presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a plan that fits your business needs and growth strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  plan.recommended
                    ? "border-2 border-orange-500 transform scale-105"
                    : "border border-gray-200"
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-bold text-orange-600">
                    {plan.price}
                  </p>
                  {plan.recommended && (
                    <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded mt-2 inline-block">
                      Most Popular
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <IconCheck className="text-orange-500 mr-2" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </section>
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
      <footer className="bg-gray-800 text-white py-6 lg:py-8 px-4 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-sm lg:text-base text-gray-400 text-center lg:text-left">
            &copy; 2024 Storekode. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-sm lg:text-base hover:text-orange-300">
              Privacy
            </a>
            <a href="#" className="text-sm lg:text-base hover:text-orange-300">
              Terms
            </a>
            <a href="#" className="text-sm lg:text-base hover:text-orange-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorekodeLandingPage;
