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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[768px] md:m-auto m-[16px]">
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
