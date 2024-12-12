import { ShoppingBag, Star, Store } from "lucide-react";
import React from "react";

function Features() {
  const features = [
    {
      title: "Easy Store Creation",
      description:
        "Launch your digital storefront in minutes with our intuitive platform.",
      icon: <Store className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Digital Services",
      description:
        "Comprehensive digital solutions tailored to your business needs.",
      icon: <ShoppingBag className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Customer Reviews",
      description: "Build trust with verified customer reviews and ratings.",
      icon: <Star className="w-12 h-12 text-yellow-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Why Choose StoreKode?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
