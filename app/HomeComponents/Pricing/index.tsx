import { IconCheck } from "@tabler/icons-react";
import React from "react";

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

function Pricing() {
  return (
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
              <p className="text-3xl font-bold text-orange-600">{plan.price}</p>
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
  );
}

export default Pricing;
