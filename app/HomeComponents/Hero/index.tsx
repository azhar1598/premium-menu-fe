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

function Hero() {
  return (
    <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Digital Stores, Simplified</h1>
      <p className="text-xl mb-8">
        Create, Manage, and Grow Your Online Store Across All Industries
      </p>
      <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
        Create Your Store Now
      </button>
    </header>
  );
}

export default Hero;
