import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viral YouTube Shorts Agent",
  description: "AI-powered agent to create viral YouTube Shorts ideas and scripts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
