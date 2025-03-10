import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwiftConnect - Super Carrier Network",
  description: "Say goodbye to old wireless networks. Get the best coverage with SwiftConnect.",
  keywords: ["wireless network", "best carrier", "fastest internet"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} antialiased`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
