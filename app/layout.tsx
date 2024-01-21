import { Inter, Titan_One } from "next/font/google";

import { CityProvider } from "@/components/context/city-context";

import type { Metadata } from "next";

import "./globals.css";
import { Toast } from "@/components/toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const titan_one = Titan_One({
  display: "swap",
  variable: "--font-titan",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HowsTheWeather",
  description: "AI powered weather forecast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${titan_one.variable}`}>
      <body className="bg-zinc-800 font-inter">
        <CityProvider>{children}</CityProvider>
        <Toast />
      </body>
    </html>
  );
}
