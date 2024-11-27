import React from "react";
import { Card, SimpleGrid, Text, createStyles } from "@mantine/core";
import {
  IconCoffee,
  IconAward,
  IconBuildingCommunity,
  IconPizza,
  IconSortAscendingNumbers,
  IconIceCream,
  IconChartBar,
  IconBread,
  IconCloudComputing,
  IconHotelService,
} from "@tabler/icons-react";

// const useStyles = createStyles((theme: any) => ({
//   card: {
//     backgroundColor: theme.colors.red[6],
//     color: theme.white,
//     padding: theme.spacing.md,
//     borderRadius: theme.radius.md,
//   },
//   icon: {
//     width: 48,
//     height: 48,
//   },
// }));

const BusinessTypes = () => {
  const outletTypes = [
    { icon: IconHotelService, label: "Food courts & canteens" },
    { icon: IconCoffee, label: "Cafe" },
    { icon: IconAward, label: "Fine dine" },
    { icon: IconBuildingCommunity, label: "Bar & brewery" },
    { icon: IconPizza, label: "Pizzeria" },
    { icon: IconSortAscendingNumbers, label: "QSR" },
    { icon: IconIceCream, label: "Desserts" },
    { icon: IconChartBar, label: "Large chains" },
    { icon: IconBread, label: "Bakery" },
    { icon: IconCloudComputing, label: "Cloud kitchens" },
  ];

  return (
    <Card bg={"orange"} p={"md"} radius={"md"}>
      <SimpleGrid cols={5} spacing="md">
        {outletTypes.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <Icon width={100} height={100} color="white" />
            <Text size="sm" fw={500} c={"white"}>
              {label}
            </Text>
          </div>
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default BusinessTypes;
