import React from "react";
import { Shirt, Watch, Utensils, Diamond, Laptop } from "lucide-react";
import { IconTreadmill } from "@tabler/icons-react";

const storeTypes = [
  { icon: <Shirt />, name: "Fashion" },
  { icon: <Diamond />, name: "Jewelry" },
  { icon: <Watch />, name: "Accessories" },
  { icon: <Laptop />, name: "Electronics" },
  { icon: <Utensils />, name: "Restaurants" },
  { icon: <IconTreadmill />, name: "Fitness" },
];

function Industries() {
  return (
    <section className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Stores for Every Industry</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
        {storeTypes.map((store, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
              {React.cloneElement(store.icon, {
                className: "w-10 h-10 text-blue-600",
                strokeWidth: 1.5,
              })}
            </div>
            <p className="font-semibold text-gray-700">{store.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;
