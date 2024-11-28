import {
  Box,
  Divider,
  Flex,
  Image,
  Stack,
  Table,
  Tabs,
  Text,
} from "@mantine/core";

import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import classes from "./menucard.module.css";

export const NewMenu = ({ storeDetail, productCategories }) => {
  console.log("categories", productCategories);
  return (
    <Box className="min-h-[500px] bg-zinc/30 backdrop-blur-sm py-3 mx-1  text-white rounded-sm menssu-bg2 overflow-auto">
      <Box className="px">
        <Box className="text-center mb-8">
          <Text size="32px" fw={700}>
            OUR MENU
          </Text>
        </Box>
        <Tabs
          defaultValue={productCategories[0]?.name.toLowerCase()}
          //   variant="pills"
          color="red"
          classNames={{
            root: classes.root,
            list: classes.list,
          }}
        >
          <Tabs.List mb={28}>
            {productCategories.map((category, index) => (
              <Tabs.Tab key={index} value={category?.name.toLowerCase()}>
                <Stack>
                  <Image
                    src={category?.images[0]}
                    alt={category?.name}
                    width={10}
                    style={{ maxHeight: "30px", objectFit: "contain" }}
                    height={10}
                    radius="xl"
                  />
                  {category?.name.toUpperCase()}
                </Stack>
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {productCategories.map((category, index) => (
            <Tabs.Panel
              key={index}
              value={category?.name.toLowerCase()}
              bg={"zinc"}
            >
              <Flex align={"flex-start"} justify={"space-between"} p={6}>
                <Stack gap={5}>
                  <div
                    className="text-md inline-flex items-center py-2 rounded-md mb-4 px-3 ml-3"
                    style={{
                      backgroundColor: storeDetail?.websiteTheme.primaryColor,
                      width: "fit-content",
                    }}
                  >
                    <Text
                      c="white"
                      size="14px"
                      fw={600}
                      className="text-black font-bold"
                    >
                      {category.name.toUpperCase()}
                    </Text>
                  </div>

                  {category?.products.map((product, productIndex) => (
                    <MenuItem
                      key={`${product.name}-${productIndex}`}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
                </Stack>
                <Stack gap={20}>
                  {category?.images.map((image, index) => (
                    <Stack
                      gap={20}
                      key={index}
                      mr={10}
                      style={{ position: "relative" }}
                    >
                      <div
                        className="absolute inset-1 -top-2 left-5 -right-2 h-24  rounded-lg"
                        style={{
                          backgroundColor:
                            storeDetail?.websiteTheme.primaryColor,
                        }}
                      />

                      <Image
                        src={image}
                        alt={index}
                        className={` 
                         z-[1000]
                        rounded-lg pl-4 max-h-24 min-h-24 h-24 w-28 max-w-28 min-w-28 "}`}
                        style={{ borderRadius: "10px" }}
                      />
                    </Stack>
                  ))}
                </Stack>
              </Flex>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
const MenuItem = ({ name, price }) => (
  <Table>
    <Table.Tbody>
      <Table.Tr key={name}>
        <Table.Td w={170}>{name}</Table.Td>
        <Table.Td>
          <Flex align={"center"}>
            <IconCurrencyRupee stroke={1} size={14} />
            <Text>{price}</Text>
          </Flex>
        </Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
);
