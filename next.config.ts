/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "another-domain.com",
      "third-domain.net",
      "png.pngtree.com",
      "d1csarkz8obe9u.cloudfront.net",
      "*.jpg",
      "marketplace.canva.com",
      "storage.googleapis.com",
      "google.com",
    ],
  },
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};

export default nextConfig;
