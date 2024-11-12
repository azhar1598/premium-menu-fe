import React, { useState } from "react";
import { Modal, Button } from "@mantine/core";
import FlipPage from "react-flip-page";

const MenuBookModal = ({ opened, close }) => {
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
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        bg={"red"}
        padding={0}
        centered
        fullScreen
        transitionProps={{ transition: "rotate-left", duration: 200 }}
        // withCloseButton={false}
      >
        <div className="book-container bg-black p-2 h-[100vh] w-[100vw] flex items-center justify-center">
          <FlipPage
            orientation="horizontal"
            className="book"
            // responsive
            // width={300}
            // height={1000}
            showHint={false}
            onPageChange={(page) => setCurrentPage(page - 1)}
            onClick={(direction) => handlePageTurn(direction)}
          >
            {pageImages.map((image, index) => (
              <div
                key={index}
                className="page"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  justifyContent: "center",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                  width: "100%",
                }}
              />
            ))}
          </FlipPage>
        </div>
      </Modal>
    </>
  );
};

export default MenuBookModal;
