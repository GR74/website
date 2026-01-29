import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Caveat } from "next/font/google";
import { CustomCursor, LoadingScreen, HUDOverlay } from "@/components/effects";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowrish Rajagopal",
  description: "Research & Systems - Computational biology, Clinical AI, Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      >
        <LoadingScreen />
        <HUDOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
