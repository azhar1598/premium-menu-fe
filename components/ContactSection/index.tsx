import React from "react";
import {
  Box,
  Container,
  Paper,
  Text,
  Group,
  Stack,
  ActionIcon,
  Badge,
} from "@mantine/core";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconInfoSquare,
} from "@tabler/icons-react";

const ContactSection = ({ storeDetail }) => {
  const formatTime = (time: string) => {
    return new Date(`2024-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  return (
    <Paper
      mt={80}
      radius="md"
      w={"100vw"}
      //   p={"lg"}
      bg="rgba(0, 0, 0, 0.1)"
      //   bg={"black"}
      style={{
        backdropFilter: "blur(10px)",
        //   border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box mt="xl" p={"lg"}>
        <Text fw={600} size="lg" align="left" color="gray.3" mb="md">
          Business Hours
        </Text>
        <Group justify="flex-start" gap="lg">
          {storeDetail?.businessHours.map((hours: any, index: number) => (
            <Badge
              key={index}
              size="lg"
              radius="sm"
              variant="dot"
              color={
                storeDetail?.websiteTheme?.primaryColor === "#fab005"
                  ? "yellow"
                  : "blue"
              }
            >
              {hours.day}: {formatTime(hours.openTime)} -{" "}
              {formatTime(hours.closeTime)}
            </Badge>
          ))}
        </Group>
      </Box>
      <Stack align="flext-start" gap="lg" p={"lg"} bg={"black"} mt={10}>
        <Group align="center" gap="sm">
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
          <Text size="lg" fw={600} color="white" align="left">
            About Us
          </Text>
          <Text size="sm" color="gray.3" align="left" w="300px">
            {storeDetail?.description}
          </Text>
        </Group>
        {/* Location Section */}
        <Group align="center" gap="sm">
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
          <Text size="sm" color="gray.3" align="left" w="300px">
            {storeDetail?.address}, {storeDetail?.city},
            <br />
            {storeDetail?.state}, {storeDetail?.pincode}.
          </Text>
        </Group>

        {/* Contact Information */}
        <Group gap="xl" align="center" justify="left">
          <Group
            gap="xs"
            component="a"
            href="mailto:ts.cafesouth.av@email.com"
            sx={(theme) => ({
              color: theme.colors.gray[4],
              textDecoration: "none",
              transition: "color 200ms ease",
              "&:hover": {
                color: "#ff8000",
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

        {/* Social Media Section */}
        <Stack align="center" gap="md">
          <Text color="gray.5" size="sm" weight={500}>
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
      </Stack>
    </Paper>
  );
};

export default ContactSection;
