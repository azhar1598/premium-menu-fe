import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 lg:py-8 px-4 lg:px-8 ">
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
  );
}

export default Footer;
