"use client";
import React, { useState } from "react";
import FlipPage from "react-flip-page";

const BookPageComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const handlePageTurn = (direction) => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageImages = [
    "https://marketplace.canva.com/EAFwRADHMsM/1/0/518w/canva-orange-and-black-bold-geometric-restaurant-menu-Vwrv-5PCxcg.jpg",
    "https://marketplace.canva.com/EAFoiF01byQ/1/0/1131w/canva-black-and-orange-minimalist-modern-restaurant-menu-4hz3YKuqdm0.jpg",
    "https://content.wepik.com/statics/29838533/preview-page0.jpg",
  ];

  return (
    <div className="book-container w-screen h-screen">
      <FlipPage
        orientation="horizontal"
        className="book w-screen h-screen"
        responsive
        showHint={false}
        onPageChange={(page) => setCurrentPage(page - 1)}
        onClickCorner={(direction) => handlePageTurn(direction)}
      >
        {pageImages.map((image, index) => (
          <div
            key={index}
            className="page w-screen h-screen"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </FlipPage>
    </div>
  );
};

export default BookPageComponent;