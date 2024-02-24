import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ToastProvider from "@/app/components/elements/ToastProvider";
import Providers from "@/app/providers";
import { SITE_NAME } from "@/app/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Take home assignment",
  authors: {
    url: "https://github.com/s3822042",
    name: "Vo Thanh Luan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <ToastProvider />
      </body>
    </html>
  );
}
