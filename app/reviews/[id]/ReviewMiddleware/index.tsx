import React from "react";

const ReviewMiddleware = ({ reviewDetail }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="relative flex flex-col items-center space-y-6 animate-pulse">
        {/* Loader Container */}
        <div className="relative w-48 h-48">
          {/* Circular Background */}
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>

          {/* Main Loader */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-8 border-t-8 border-blue-500 border-opacity-30 rounded-full animate-spin">
              <div className="w-full h-full border-8 border-transparent border-t-8 border-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Pulsing Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
        </div>

        {/* Loading Text */}
        <div className="text-xl font-semibold text-blue-800 animate-pulse">
          Taking you to Store...
        </div>
      </div>

      {/* Sponsored Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <span className="text-sm font-medium text-gray-700">Powered by</span>
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
  );
};

export default ReviewMiddleware;
