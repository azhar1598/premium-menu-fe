"use client";
import Credits from "@/components/common/Credits";
import ContactSection from "@/components/ContactSection";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconInfoSquare,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

function NewComponent({ storeDetail }) {
  return (
    <Stack>
      <div className="relative h-[170vh] w-screen bg-image">
        {/* <img
          src="/assets/auth/rest2.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover mt"
        /> */}

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Stack
          align="center"
          pt={20}
          className="absolute bottom-0 z-10 h-full w-full"
        >
          {/* Logo */}
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xl font-bold text-white">RT</span>
          </div>

          {/* Restaurant Name */}
          <h1 className="text-lg font-bold text-white">Raghavendra Tiffins</h1>
          <p className="text-gray-400 -mt-3">Tastes Better</p>

          <button
            style={{
              backgroundColor: "#213d4c",
              color: "white",
              padding: "6px 2px 6px 2px",
              borderRadius: "5px",
              width: "200px",
              fontWeight: 550,
            }}
          >
            View Menu
          </button>

          {/* Business Hours */}
          {/* <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mt-4 w-64">
            <h2 className="text-lg font-semibold text-white mb-3 text-center">
              Business Hours
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-200 text-sm">
              <div>Monday - Friday</div>
              <div>7:00 AM - 10:00 PM</div>
              <div>Saturday</div>
              <div>7:00 AM - 10:00 PM</div>
              <div>Sunday</div>
              <div>7:00 AM - 9:00 PM</div>
            </div>
          </div> */}

          <Stack
            gap={0}
            className="flex flex-col items-center justify-center absolute bottom-0 w-full"
          >
            <Flex
              direction="column"
              align="flex-start"
              gap="sm"
              p={20}
              bg={"black"}
            >
              <Flex gap={10}>
                <Box
                  p={2}
                  style={{
                    backgroundColor: "rgba(255, 128, 0, 0.2)",
                    borderRadius: "50%",
                    width: "30px",
                  }}
                >
                  <IconInfoSquare color="#ff8000" stroke={2} />
                </Box>
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
              bg={"black"}
            >
              <Flex gap={10}>
                <Box
                  p={2}
                  style={{
                    backgroundColor: "rgba(255, 128, 0, 0.2)",
                    borderRadius: "50%",
                    width: "30px",
                  }}
                >
                  <IconMapPin size={24} color="#ff8000" stroke={1.5} />
                </Box>
                <Text size="lg" fw={600} color="white" align="left">
                  Our Location
                </Text>
              </Flex>
              <Text size="sm" color="gray.3" align="left" w="300px">
                {storeDetail?.address}, {storeDetail?.city},
                <br />
                {storeDetail?.state}, {storeDetail?.pincode}.
              </Text>
            </Flex>

            <Group
              gap="md"
              align="center"
              c={"white"}
              justify="left"
              bg={"black"}
              p={20}
            >
              <Group
                component="a"
                href="mailto:ts.cafesouth.av@email.com"
                sx={(theme) => ({
                  color: theme.colors.gray[4],
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  "&:hover": {
                    color: "white",
                  },
                })}
              >
                <IconMail size={20} />
                <Text size="sm">ts.cafesouth.av@email.com</Text>
              </Group>
              <Group
                gap="xs"
                component="a"
                href="tel:+6531192890"
                sx={(theme) => ({
                  color: theme.colors.gray[4],
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  "&:hover": {
                    color: "#ff8000",
                  },
                })}
              >
                <IconPhone size={20} />
                <Text size="sm">+65 3119 2890</Text>
              </Group>
            </Group>

            <Stack p={20} bg={"black"}>
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
                    sx={(theme) => ({
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: theme.colors.gray[3],
                      "&:hover": {
                        backgroundColor: "rgba(255, 128, 0, 0.2)",
                        color: "#ff8000",
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
    </Stack>
  );
}

export default NewComponent;
