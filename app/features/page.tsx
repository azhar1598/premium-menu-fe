import React from "react";
import {
  Store,
  ShoppingCart,
  BarChart2,
  CreditCard,
  Globe,
  PieChart,
} from "lucide-react";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer/page";

const FeaturesPage = () => {
  const featureDetails = [
    {
      icon: <Store className="w-12 h-12 text-blue-600" />,
      title: "Easy Store Setup",
      description:
        "Create your online store in just a few clicks. No technical skills required. Choose from multiple templates and customize to match your brand.",
      details: [
        "Drag-and-drop interface",
        "Mobile-responsive designs",
        "Custom domain integration",
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-600" />,
      title: "Comprehensive E-commerce Tools",
      description:
        "Powerful e-commerce tools to manage your online business efficiently.",
      details: [
        "Inventory management",
        "Payment gateway integration",
        "Shipping label generation",
      ],
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-purple-600" />,
      title: "Advanced Analytics",
      description:
        "Gain insights into your business performance with detailed analytics.",
      details: [
        "Sales tracking",
        "Customer behavior reports",
        "Revenue forecasting",
      ],
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-600" />,
      title: "Payment Solutions",
      description:
        "Multiple payment options to make purchasing easy for your customers.",
      details: [
        "Multiple payment gateways",
        "Secure transactions",
        "International payment support",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-teal-600" />,
      title: "Multi-channel Selling",
      description:
        "Expand your reach across multiple platforms and marketplaces.",
      details: [
        "Social media integration",
        "Marketplace listings",
        "Cross-platform synchronization",
      ],
    },
    {
      icon: <PieChart className="w-12 h-12 text-red-600" />,
      title: "Marketing Tools",
      description:
        "Built-in marketing features to help you grow your business.",
      details: [
        "Email marketing",
        "Social media marketing",
        "Customer retention programs",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}

        {/* Hero Section */}
        <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Powerful Features for Your Business
          </h1>
          <p className="text-xl mb-8">
            Everything you need to create, manage, and grow your online store
          </p>
        </header>

        {/* Features Grid */}
        <section className="container mx-auto py-16 px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {featureDetails.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FeaturesPage;
