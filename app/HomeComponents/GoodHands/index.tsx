import React from "react";

function GoodHands() {
  return (
    <div className="relative overflow-hidden bg-green-300">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
            You are in Good Hands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Over 2500 Restaurants
            </h3>
            <p className="text-gray-600">
              In 7 countries have chosen TabSquare as their Technology
            </p>
          </div>
          <div>
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Over 50000 Data Points
            </h3>
            <p className="text-gray-600">
              Processed daily serving over 40 Million users annually
            </p>
          </div>
          <div>
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Up to 20% Increase</h3>
            <p className="text-gray-600">
              In average check & up to 50% reduction in wait staff costs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodHands;
