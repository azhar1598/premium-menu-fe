import { Flex, Group, Text } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import React from "react";

function Credits() {
  return (
    <Flex gap={5} align="center" justify="center" bg={"black"} p={10}>
      <IconCopyright stroke={1} color="gray" size={15} />
      <Text bg={"black"} size="12px" color="white" ta={"center"} c={"gray"}>
        Powered by Storekode.com
      </Text>
    </Flex>
  );
}

export default Credits;
