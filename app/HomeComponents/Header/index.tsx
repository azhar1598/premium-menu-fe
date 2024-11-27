"use client";
import { IconQrcode } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile Navigation Toggle */}
      <nav className="px-4 py-2 flex justify-between lg:justify-around items-center shadow-sm bg-gray-900 lg:px-8 fixed top-0 w-full z-[1000]">
        <Link href={"/"} className="flex flex-end space-x-1 cursor-pointer">
          <IconQrcode className="text-white" size={32} />
          <div>
            <h1 className="text-lg font-bold text-gray-300 space-y-0 -mb-3">
              Storekode
            </h1>
            <sub className="mx-6 text-gray-300">Innovation Inside</sub>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href={"/services"}
            className="px-4 py-2 text-gray-200 cursor-pointer  rounded-lg font-semibold text-xs"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="px-4 py-2 text-gray-200 cursor-pointer  rounded-lg font-semibold text-xs"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="px-4 py-2 text-gray-200 cursor-pointer rounded-lg font-semibold text-xs"
          >
            Contact
          </Link>

          <button className="px-2  bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm">
            Book a Demo
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
