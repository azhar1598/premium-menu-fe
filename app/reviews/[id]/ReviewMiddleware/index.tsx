"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import GLogo from "@/public/assets/logo/greview.png";
import Image from "next/image";

const StarRating = ({ rating = 4.5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${
            index < fullStars
              ? "text-yellow-400"
              : index === fullStars && hasHalfStar
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          viewBox="0 0 24 24"
          fill={
            index < fullStars || (index === fullStars && hasHalfStar)
              ? "currentColor"
              : "none"
          }
          stroke="currentColor"
          strokeWidth="2"
        >
          {index === fullStars && hasHalfStar ? (
            <>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                clipPath="url(#halfStarClip)"
              />
              <defs>
                <clipPath id="halfStarClip">
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
            </>
          ) : (
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          )}
        </svg>
      ))}
    </div>
  );
};

const ReviewMiddleware = ({ reviewDetail }: any) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://search.google.com/local/writereview?placeid=${reviewDetail?.googleReviewPid}`;
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-csenter min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-md">
        {/* Google Branding Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Google Logo with G Emphasis */}
          <div className="flex items-center justify-center  absolute top-5">
            <div className="relative flex">
              {/* <div className="absolute -left-2 -top-1 w-10 h-10 bg-blue-500 rounded-full z-0"></div> */}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="48"
                viewBox="0 0 272 92"
                className="relative z-10"
              >
                <path
                  d="M50,10C27.91,10,10,27.91,10,50s17.91,40,40,40c14.33,0,26.74-7.67,33.43-19.23l-7.71-4.45C70.41,76.21,60.65,80,50,80c-16.57,0-30-13.43-30-30s13.43-30,30-30c11.67,0,21.76,6.72,26.8,16.63h-18.3v9.37h30V30h-9.91C73.25,16.96,62.34,10,50,10Z"
                  fill="currentColor"
                />

                <path
                  d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                  fill="#EA4335"
                />
                <path
                  d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C119.25 34.32 129.24 25 141.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                  fill="#FBBC05"
                />
                <path
                  d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.63 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.84c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                  fill="#4285F4"
                />
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                <path
                  d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.2 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                  fill="#EA4335"
                />
              </svg> */}
              <Image src={GLogo} width={150} height={150} alt="g-logo" />
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="flex flex-col items-center mt-12">
            <StarRating rating={reviewDetail?.googleRating || 4.5} />
            <p className="text-sm text-gray-600 mt-2 flex items-center space-x-1">
              <span>Verified</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>

        {/* Store Name Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-900 drop-shadow-lg animate-fade-in">
            {reviewDetail?.storeName || "Our Store"}
          </h1>
          <p className="text-xl text-blue-700 mt-2 animate-fade-in-delay">
            We Value Your Feedback
          </p>
        </div>

        {/* Rest of the component remains the same as in the previous version */}
        <div className="relative flex flex-col items-center space-y-2">
          <div className="relative w-44 h-44">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-8 border-t-8 border-blue-500 border-opacity-30 rounded-full animate-spin">
                <div className="w-full h-full border-8 border-transparent border-t-8 border-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full animate-bounce"></div>
          </div>

          <div className="text-2xl font-semibold text-blue-800 animate-pulse">
            Taking you to Review...
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-72">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="text-sm font-medium text-gray-700">
              Powered by
            </span>
            <a
              href="https://storekode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Storekode.com
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ReviewMiddleware;
