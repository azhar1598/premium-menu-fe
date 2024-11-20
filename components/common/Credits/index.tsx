import { Flex, Group, Text } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import React from "react";
import logo from "@/public/assets/logo/storekode.png";
import Image from "next/image";

function Credits() {
  return (
    <Flex gap={2} align="center" justify="center" bg={"gray"} p={5}>
      <IconCopyright stroke={1} color="black" size={15} />
      <Text size={"10px"}>Powered by</Text>
      <Image src={logo.src} alt="logo" height="160" width="160" />
    </Flex>
  );
}

export default Credits;
