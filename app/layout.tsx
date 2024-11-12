"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Box, Container, Flex, MantineProvider, Stack } from "@mantine/core";
import { theme } from "@/theme";
import { queryClient } from "@/lib/queryClient";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import "mantine-datatable/styles.layer.css";
import "@mantine/notifications/styles.css";
import {
  Heebo,
  Urbanist,
  Space_Grotesk,
  Tangerine, // Clean, modern geometric
} from "next/font/google";
import { Notifications } from "@mantine/notifications";

const spaceGrotesk = Heebo({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased `}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme}>
            <Notifications position="top-center" />
            <Provider store={store}>
              <Flex align={"Flex-center"} justify={"center"} w={"100%"}>
                <Stack>{children}</Stack>
              </Flex>
            </Provider>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
