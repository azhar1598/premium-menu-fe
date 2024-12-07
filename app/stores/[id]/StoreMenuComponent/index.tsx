"use client";
import React, { useEffect, useState } from "react";
import { Flex, Group, Indicator, Stack, Text } from "@mantine/core";
import Image from "next/image";
import MenuCarousel from "./MenuCarousel";
import Footer from "@/components/common/Footer";
import { NewMenu } from "./NewMenu";
import { IconComet, IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";

const isStoreOpen = (businessHours: any) => {
  // Get current date and time
  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yesterdayDay = yesterday.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Get today's and yesterday's business hours
  const todayHours = businessHours.find(
    (schedule: any) => schedule.day === currentDay
  );
  const yesterdayHours = businessHours.find(
    (schedule: any) => schedule.day === yesterdayDay
  );

  if (!todayHours) return false;

  // Convert all times to minutes for easier comparison
  const currentMinutes = timeToMinutes(currentTime);
  const todayOpenMinutes = timeToMinutes(todayHours.openTime);
  const todayCloseMinutes = timeToMinutes(todayHours.closeTime);

  // Case 1: Normal opening hours (e.g., 09:00-17:00)
  if (todayCloseMinutes > todayOpenMinutes) {
    return (
      currentMinutes >= todayOpenMinutes && currentMinutes < todayCloseMinutes
    );
  }

  // Case 2: Overnight hours (e.g., 17:00-01:00)
  // First check if we're before midnight
  if (currentMinutes >= todayOpenMinutes) {
    return true;
  }

  // Then check if we're after midnight but before closing
  if (currentMinutes < todayCloseMinutes) {
    // Make sure yesterday was also a business day
    if (
      yesterdayHours &&
      timeToMinutes(yesterdayHours.openTime) <=
        timeToMinutes(yesterdayHours.closeTime)
    ) {
      return false; // Yesterday had normal hours, so we're closed now
    }
    return true; // We're in the early hours before closing
  }

  // Case 3: Check if we're still in yesterday's overnight hours
  if (
    yesterdayHours &&
    timeToMinutes(yesterdayHours.closeTime) <
      timeToMinutes(yesterdayHours.openTime)
  ) {
    if (currentMinutes < timeToMinutes(yesterdayHours.closeTime)) {
      return true;
    }
  }

  return false;
};

// Helper function to convert time string to minutes since midnight
const timeToMinutes = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
};

// Helper function to format minutes back to time string (for debugging)
const minutesToTime = (minutes: any) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
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
          // width={1000}
          // height={1000}
          sizes="full"
          // style={{}}
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

          <Link href={"#"}>
            <Flex
              className="rounded absolute top-3 right-3 px-2"
              gap={2}
              style={{
                color: storeDetail.websiteTheme.taglineColor,
                backgroundColor: storeDetail.websiteTheme.primaryColor,
              }}
              py={6}
              align={"center"}
              justify={"center"}
            >
              <Text
                className="text-white text-sm "
                size="12px"
                fw={700}
                c={"white"}
              >
                RATE US
              </Text>
              <IconStarFilled size={12} color="gold" />
            </Flex>
          </Link>

          <NewMenu
            storeDetail={storeDetail}
            productCategories={storeDetail?.productCategories}
          />
          {/* <MenuCarousel storeDetail={storeDetail} /> */}
          <Footer storeDetail={storeDetail} />
        </Stack>
      </div>
    </Stack>
  );
}

export default StoreMenuComponent;
