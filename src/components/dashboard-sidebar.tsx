"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Phone,
  Globe,
  Layers,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Start a Free Trial",
      href: "/dashboard/free-trial",
      icon: FileText,
    },
    {
      name: "Add a New Line",
      href: "/dashboard/add-line",
      icon: PlusCircle,
    },
    {
      name: "Activate Home Phone",
      href: "/dashboard/home-phone",
      icon: Phone,
    },
    {
      name: "Add International Data",
      href: "/dashboard/international-data",
      icon: Globe,
    },
    {
      name: "My Lines",
      href: "/dashboard/my-lines",
      icon: Layers,
      count: 0,
    },
    {
      name: "My Pools",
      href: "/dashboard/my-pools",
      icon: Users,
    },
    {
      name: "Usage Analytics",
      href: "/dashboard/analytics",
      icon: BarChart2,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Sign Out",
      href: "/dashboard/sign-out",
      icon: LogOut,
    },
  ]

  return (
    <aside className="w-64 border-r border-gray-200 bg-white">
      <div className="p-6">
        <Link href="/dashboard">
          <Image
            src="/favicon.png"
            alt="SwiftConnect Logo"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <nav className="mt-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-[#c41e3a] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-500"}`} />
              <span>{item.name}</span>
              {item.count !== undefined && (
                <span
                  className={`ml-auto px-2 py-0.5 rounded-full text-xs ${
                    isActive ? "bg-white bg-opacity-20 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.count}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

