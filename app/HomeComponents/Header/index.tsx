import { IconQrcode } from "@tabler/icons-react";
import React, { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
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
    </>
  );
}

export default Header;
