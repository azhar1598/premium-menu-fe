"use client";
import Credits from "@/components/common/Credits";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Indicator,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconClock,
  IconInfoSquare,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuCarousel from "./MenuCarousel";

function StoreMenuComponent({ storeDetail }: any) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const groupedHours = storeDetail?.businessHours?.reduce(
    (acc: string, hour: any) => {
      const { day, openTime, closeTime } = hour;
      const key = `${openTime}-${closeTime}`;
      if (!acc[key]) {
        acc[key] = { days: [day], openTime, closeTime };
      } else {
        acc[key].days.push(day);
      }
      return acc;
    },
    {}
  );

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes
      ?.toString()
      .padStart(2, "0")} ${ampm}`;
  };

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

          <Stack
            gap={0}
            className="flex flex-col items-center justify-center  bottom-0 w-full bg-black/60  backdrop-blur-sm"
          >
            <Flex
              direction="column"
              align="flex-start"
              gap="sm"
              p={20}
              //   className="bg-black/30 backdrop-blur-xs"
              //   bg={"black"}
            >
              <Flex gap={10}>
                <Box
                  p={2}
                  style={{
                    backgroundColor: storeDetail?.websiteTheme.primaryColor,
                    borderRadius: "50%",
                    filter: "blur(10px)",
                    width: "30px",
                  }}
                ></Box>
                <IconInfoSquare
                  style={{ position: "absolute", left: 22 }}
                  color={storeDetail?.websiteTheme.primaryColor}
                  stroke={2}
                />
                <Text size="lg" fw={600} color="white">
                  About Us
                </Text>
              </Flex>
              <Box>
                <Text size="sm" color="gray.3" w="300px">
                  {storeDetail?.description}
                </Text>
              </Box>
            </Flex>
            <Flex
              direction="column"
              align="flex-start"
              gap="sm"
              p={20}
              //   className="bg-black/60 backdrop-blur-xs"
              //   bg={"black"}
            >
              <Flex gap={10}>
                <Box
                  p={2}
                  style={{
                    backgroundColor: storeDetail?.websiteTheme.primaryColor,
                    borderRadius: "50%",
                    filter: "blur(10px)",
                    width: "30px",
                  }}
                ></Box>
                <IconMapPin
                  // size={24}
                  style={{ position: "absolute", left: 22 }}
                  color={storeDetail?.websiteTheme.primaryColor}
                  stroke={1.5}
                />
                <Text size="lg" fw={600} color="white" ta="left">
                  Our Location
                </Text>
              </Flex>
              <Text size="sm" color="gray.3" ta="left" w="300px">
                {storeDetail?.address}, {storeDetail?.city},
                <br />
                {storeDetail?.state}, {storeDetail?.pincode}.
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="flex-start"
              gap="sm"
              p={20}
              //   className="bg-black/60 backdrop-blur-xs"
              //   bg={"black"}
            >
              <Flex gap={10}>
                <Box
                  p={2}
                  style={{
                    backgroundColor: storeDetail?.websiteTheme.primaryColor,
                    borderRadius: "50%",
                    filter: "blur(10px)",
                    width: "30px",
                  }}
                ></Box>
                <IconClock
                  style={{ position: "absolute", left: 22, marginTop: "5px" }}
                  color={storeDetail?.websiteTheme.primaryColor}
                  stroke={1.5}
                />
                <h2 className="text-lg font-semibold text-white mb-3 text-s">
                  Business Hours
                </h2>
              </Flex>

              {groupedHours &&
                Object.values(groupedHours).map(
                  ({ days, openTime, closeTime }) => (
                    <div
                      key={`${openTime}-${closeTime}`}
                      className="text-white/80"
                    >
                      <span className="font-medium">
                        {days.length > 1
                          ? `${days.slice(0, -1).join(", ")} and ${
                              days[days.length - 1]
                            }`
                          : days[0]}
                      </span>
                      : {formatTime(openTime)} - {formatTime(closeTime)}
                    </div>
                  )
                )}
            </Flex>

            <Group
              gap="md"
              align="center"
              c={"white"}
              justify="left"
              //   bg={"black"}
              p={20}
            >
              <Group
                component="a"
                // href="mailto:ts.cafesouth.av@email.com"
                style={(theme: any) => ({
                  color: theme.colors.gray[4],
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  "&:hover": {
                    color: "white",
                  },
                })}
              >
                <IconMail size={20} />
                <Text size="sm">{storeDetail?.merchantDetails?.email}</Text>
              </Group>
              <Group
                gap="xs"
                component="a"
                // href="tel:+6531192890"
                style={(theme: any) => ({
                  color: theme.colors.gray[4],
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  "&:hover": {
                    color: "#901414",
                  },
                })}
              >
                <IconPhone size={20} />
                <Text size="sm">
                  +91-{storeDetail?.merchantDetails?.phoneNumber}
                </Text>
              </Group>
            </Group>

            <Stack p={20} bg={"blasck"}>
              <Text color="gray.5" size="sm" fw={500}>
                Follow Us On
              </Text>
              <Group gap="lg">
                {[
                  { icon: IconBrandFacebook, link: "#" },
                  { icon: IconBrandInstagram, link: "#" },
                  { icon: IconBrandTwitter, link: "#" },
                ].map((social, index) => (
                  <ActionIcon
                    key={index}
                    size="lg"
                    radius="xl"
                    variant="filled"
                    component="a"
                    href={social.link}
                    style={(theme) => ({
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: theme.colors.gray[3],
                      "&:hover": {
                        backgroundColor: "#a904044d",
                        color: "#901414",
                      },
                    })}
                  >
                    <social.icon size={20} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>
            <Credits />
          </Stack>

          {/* <ContactSection storeDetail={storeDetail} /> */}
        </Stack>
      </div>
      {/* {showCarousel && ( */}

      {/* )} */}
    </Stack>
  );
}

export default StoreMenuComponent;
