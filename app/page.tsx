import React from "react";
import DisplayImage from "../public/assets/auth/rest2.jpg";
import Image from "next/image";

const RestaurantOrderUI = () => {
  return (
    <div className="w-full h-[100vh] bg-white">
      {/* Restaurant Card */}
      <div className="relative">
        {/* Background Image Section with Gradient and Blur */}
        <div className="relative">
          <Image
            // src="https://b.zmtcdn.com/data/pictures/0/20728420/5c24d6409aec92703816a3004f055a66_featured_v2.jpg"
            src={"/assets/auth/rest2.jpg"}
            width={100}
            height={100}
            alt="Restaurant food"
            className="w-full h-[100vh] object-cover "
          />
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70 rounded-b-3xl" />

          {/* Bottom Fade/Blur Effect */}
          <div className="absolute -bottom-10 -left-10 w-full h-52 bg-gradient-to-t from-black/0 to-transparent blur-md " />
        </div>

        {/* Restaurant Info Card */}
        <div className="relative text-white rounded-lg mx-4 p-4 -mt-[75vh]">
          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-20">
            <div className="bg-white p-2 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-orange-500"
                  fill="currentColor"
                >
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Restaurant Name */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-center mt-6 mb-4 ">
            <h2 className="text-lg font-medium">Annapurna Mess</h2>
            <p className="text-sm text-gray-400">Tastes Better</p>
            <button className="bg-orange-500 text-white w-72 py-2 mt-6 px-4 rounded-lg hover:bg-orange-600 transition-colors">
              View Menu
            </button>
          </div>

          <div className="text-center mt-32 space-y-2 ">
            <h2>Location</h2>
            <h2 className="text-md font-medium">
              KPHB Colony, IVth Phase, Hyderabad, 507002
            </h2>
            <p className="text-white">ts.cafesouth.av@email.com</p>
            <p className="text-white">+65 3119 2890</p>

            <p className="text-gray-500 mt-6">follow us on</p>
            <div className="flex justify-center space-x-6 mt-2">
              <span className="text-white">Facebook</span>
              <span className="text-white">Instagram</span>
              <span className="text-white">Twitter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      {/* <div className="text-center mt-32 space-y-2 ">
        <h2 className="text-xl font-medium">TS Cafe South Av</h2>
        <p className="text-white">ts.cafesouth.av@email.com</p>
        <p className="text-white">+65 3119 2890</p>

        <p className="text-gray-500 mt-6">follow us on</p>
        <div className="flex justify-center space-x-6 mt-2">
          <span className="text-white">Facebook</span>
          <span className="text-white">Instagram</span>
          <span className="text-white">Twitter</span>
        </div>
      </div> */}
    </div>
  );
};

export default RestaurantOrderUI;
