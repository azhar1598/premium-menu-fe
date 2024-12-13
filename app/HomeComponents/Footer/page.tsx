import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { IconQrcode } from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link
              href={"/"}
              className="flex flex-end space-x-1 cursor-pointer mb-5"
            >
              <IconQrcode className="text-gray" size={32} />
              <div>
                <h1 className="text-lg font-bold text-gray-800 space-y-0 -mb-3">
                  Storekode
                </h1>
                <sub className=" text-gray-700">Store creation made easy</sub>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering businesses with digital store solutions
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin size={24} />
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Features
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <div className="space-y-2">
              <Link
                href="/terms-of-service"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <p>Email: support@storekode.com</p>
              <p>Phone: +91-8977835569</p>
              <p>Address: 123 Digital St, Tech City</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} StoreKode. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
