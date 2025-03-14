import DashboardSidebar from "@/components/dashboard-sidebar"
import type { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Dashboard - SwiftConnect",
  description: "Manage your SwiftConnect account",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

        <html lang="en">
          <body>
          <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
          </body>
        </html>

  )
}

