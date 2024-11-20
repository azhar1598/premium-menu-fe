"use client";
import React, { useEffect, useState } from "react";
import { Indicator, Stack } from "@mantine/core";
import Image from "next/image";
import MenuCarousel from "./MenuCarousel";
import Footer from "@/components/common/Footer";

const isStoreOpen = (businessHours: any) => {
  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const todayHours = businessHours.find(
    (schedule: any) => schedule.day === currentDay
  );

  if (!todayHours) return false;

  const openTime = todayHours.openTime;
  const closeTime = todayHours.closeTime;

  // Handle midnight closing time
  if (closeTime === "00:00") {
    return currentTime >= openTime || currentTime < closeTime;
  }

  return currentTime >= openTime && currentTime < closeTime;
};

function StoreMenuComponent({ storeDetail }: any) {
  const [isOpen, setIsOpen] = useState<any>([]);

  useEffect(() => {
    if (!storeDetail) return;
    setIsOpen(isStoreOpen(storeDetail?.businessHours));
  }, [storeDetail]);

  return (
    <Stack>
      <div className="max-w-[400px] relative w-screen bg-center bg-cover bg-no-repeat bg-black/70 backdrop-blur-sm">
        <Image
          src={storeDetail?.websiteTheme?.backgroundImage || "/placeholder.jpg"}
          alt="Store Background"
          fill
          sizes="full"
          style={{ objectFit: "cover" }}
          priority
        />
        <Stack align="center" pt={20}>
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center z-[1000]">
            {!storeDetail?.logo ? (
              <span
                className="text-xl font-bold"
                style={{ color: storeDetail.websiteTheme.titleColor }}
              >
                {storeDetail?.name?.slice(0, 2).toUpperCase()}
              </span>
            ) : (
              <Image
                src={storeDetail?.logo}
                alt="logo here"
                width={100}
                height={100}
                style={{ borderRadius: "100px" }}
                className="rounded-full"
              />
            )}
          </div>

          <Indicator
            color={isOpen ? "green" : "red"}
            position="top-end"
            processing={isOpen}
          >
            <h1
              className="text-lg font-bold text-white px-2"
              style={{ color: storeDetail.websiteTheme.titleColor }}
            >
              {storeDetail?.name}
            </h1>
          </Indicator>

          <p
            className="text-gray-400 -mt-3 z-[1000]"
            style={{ color: storeDetail.websiteTheme.taglineColor }}
          >
            {storeDetail?.tagLine}
          </p>

          <MenuCarousel storeDetail={storeDetail} />
          <Footer storeDetail={storeDetail} />
        </Stack>
      </div>
    </Stack>
  );
}

export default StoreMenuComponent;
