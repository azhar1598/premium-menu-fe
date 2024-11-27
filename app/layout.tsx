import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import { theme } from "@/theme";

import GoogleAnalytics from "@/components/common/GAnalytics";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer/page";
import { MantineProvider } from "@mantine/core";

// Font configuration
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://storekode.com"),
  title: {
    default: "Storekode | Instant Store Information via QR",
    template: "%s | Storekode",
  },
  description:
    "Revolutionize customer engagement across industries. One QR code provides instant access to store details - whether you're a restaurant, gym, retail store, or service provider.",
  keywords: [
    "QR code",
    "store information",
    "digital store card",
    "restaurant QR",
    "gym information",
    "retail store details",
    "instant store info",
    "customer engagement",
    "store discovery",
  ],
  openGraph: {
    title: "Storekode - Instant Store Information for Any Industry",
    description:
      "Connect customers to your store details instantly with a single QR code scan - from restaurants and gyms to retail and services.",
    url: "https://storekode.com",
    siteName: "Storekode",
    images: [
      {
        url: "./assets/logo/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storekode - Connect Customers Instantly",
    description:
      "One QR code. Endless store possibilities. Instant information for restaurants, gyms, stores, and more.",
    images: ["/images/storekode-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://storekode.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="./assets/logo/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="logo" content="./assets/logo/favicon.ico" />
      </head>
      <body className={`${heebo.className} antialiased`}>
        <GoogleAnalytics />
        <MantineProvider theme={theme}>
          <div className="min-h-screen">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
