// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "SwiftConnect - Super Carrier Network",
//   description: "Say goodbye to old wireless networks. Get the best coverage with SwiftConnect.",
//   keywords: ["wireless network", "best carrier", "fastest internet"],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
