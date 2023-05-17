import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layouts/Sidebar";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13 with Chackra-UI",
  description: "Template configured with Chackra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}
