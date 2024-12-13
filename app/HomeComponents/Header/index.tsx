"use client";
import { IconQrcode } from "@tabler/icons-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"} className="flex flex-end space-x-1 cursor-pointer">
          <IconQrcode className="text-gray" size={32} />
          <div>
            <h1 className="text-lg font-bold text-gray-800 space-y-0 -mb-3">
              Storekode
            </h1>
            <sub className="text-gray-700">Store creation made easy</sub>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/features"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            How It Works
          </Link>
          <Link
            href={"/contact"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/features"
              className="text-gray-800 hover:text-blue-600 transition"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-800 hover:text-blue-600 transition"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              href={"/contact"}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
