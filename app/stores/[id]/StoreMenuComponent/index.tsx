"use client";
import { Indicator, Stack } from "@mantine/core";

import React, { useState } from "react";
import MenuCarousel from "./MenuCarousel";
import Footer from "@/components/common/Footer";

function StoreMenuComponent({ storeDetail }: any) {
  return (
    <Stack>
      <div
        className=" max-w-[400px] relative w-screen bg-center bg-cover bg-no-repeat  bg-black/70  backdrop-blur-sm"
        style={{
          backgroundImage: `url(${storeDetail?.websiteTheme?.backgroundImage})`,
        }}
      >
        {/* Black Overlay */}
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}

        <Stack align="center" pt={20}>
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center ">
            <span className="text-xl font-bold text-white">
              {storeDetail?.name.slice(0, 2).toUpperCase()}
            </span>
          </div>

          <Indicator color="green" position="top-end" processing>
            <h1 className="text-lg font-bold text-white px-2 ">
              {storeDetail?.name}
            </h1>
          </Indicator>

          <p className="text-gray-400 -mt-3">{storeDetail?.tagLine}</p>

          <MenuCarousel storeDetail={storeDetail} />
          <Footer storeDetail={storeDetail} />
        </Stack>
      </div>
    </Stack>
  );
}

export default StoreMenuComponent;
