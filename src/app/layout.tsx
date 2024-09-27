import type { Metadata, Viewport } from "next";

import "./globals.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Rakshit's",
  description: "A personal Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1280px] m-auto">
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
