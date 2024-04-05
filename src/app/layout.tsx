import type { Metadata } from "next";
import "./globals.css";
import homeCSS from "./page.module.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={homeCSS.noMargin}>{children}</body>
    </html>
  );
}
