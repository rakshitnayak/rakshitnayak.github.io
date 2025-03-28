import type { Metadata, Viewport } from "next";
import { Provider } from "@/app/components/ui/provider"

import "./globals.css";
import { fetchConfigs } from "./actions/fetchConfigs";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const configs = await fetchConfigs();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
        <div className="max-w-[768px] md:m-auto m-[16px]">
          <Header configs={configs} />
          {children}
        </div>
        </Provider>
      </body>
    </html>
  );
}
