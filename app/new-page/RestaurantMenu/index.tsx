import React from "react";

import { IconPhone } from "@tabler/icons-react";

const menuItems = [
  {
    name: "Satay",
    description: "Grilled skewers served with our special peanut sauce",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Fried Chicken",
    description: "Crispy fried chicken with our secret blend of spices",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Chicken Steak",
    description: "Tender chicken steak grilled to perfection",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Beef Sausage",
    description: "Premium beef sausage with special seasoning",
    price: 9.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Burger",
    description: "Classic burger with fresh vegetables and special sauce",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "French Fries",
    description: "Crispy golden fries served with dipping sauce",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Pizza",
    description: "Fresh baked pizza with premium toppings",
    price: 5.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
  {
    name: "Grilled Chicken",
    description: "Marinated grilled chicken with herbs",
    price: 9.0,
    image:
      "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
  },
];

const RestaurantMenuCard = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-8 mx-2">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold text-red-500">FOOD</h1>
            <h2 className="text-4xl font-bold text-white ">MENU</h2>
          </div>
          <div className="w-24">
            {/* <div className="bg-red-800 p-3 rounded-sm text-white text-center">
              <div className="border-b border-red-600 pb-1">
                <img
                  src="/api/placeholder/30/30"
                  alt="Restaurant logo"
                  className="mx-auto mb-1"
                />
                Fradel and Spies Restaurant
              </div>
            </div> */}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center group"
            >
              <div className="flex-1">
                <h3 className="text-red-500 text-2xl font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm max-w-md">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-white text-xl">
                  ${item.price.toFixed(2)}
                </span>
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="bg-red-800 p-3 rounded-sm text-white text-center inline-flex items-center gap-2">
            <IconPhone size={20} />
            Order & Reservation: +123-456-7890
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
