import { IconAward, IconCheck, IconShoppingBag } from "@tabler/icons-react";
import React from "react";

function Benefits() {
  return (
    <section className="mt-16 lg:mt-24 bg-white rounded-xl shadow-lg p-6 lg:p-16">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
          Why Choose Storekode?
        </h2>
        <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
          We're more than just a QR code generator. We're your digital business
          companion.
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
              Provide instant access to store information, menus, promotions,
              and more.
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
  );
}

export default Benefits;
