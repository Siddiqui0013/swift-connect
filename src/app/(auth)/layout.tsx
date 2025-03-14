// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "SwiftConnect - Super Carrier Network",
//   description: "Say goodbye to old wireless networks. Get the best coverage with SwiftConnect.",
//   keywords: ["wireless network", "best carrier", "fastest internet"],
// };
import "@/app/globals.css";
import Footer from "@/components/Footer";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
