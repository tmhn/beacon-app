import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beacon — Project intelligence for any codebase",
  description:
    "Beacon is an agent-driven project intelligence workflow for unclear, unfamiliar, or poorly documented software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
