import type { Metadata, Viewport } from "next";
import { Provider } from "@/app/components/ui/provider"

import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
        <div className="max-w-[768px] md:m-auto m-[16px]">
          {children}
        </div>
        </Provider>
      </body>
    </html>
  );
}
