import type { Metadata } from "next";
import "./globals.css";

const title = "Beacon — Project intelligence for any codebase";
const description =
  "An agent-driven Claude AI skill that maps unclear, unfamiliar, or undocumented codebases — so you and your AI tools can move fast.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Beacon",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
