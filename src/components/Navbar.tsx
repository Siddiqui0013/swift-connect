"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PLAN", href: "/plan" },
    { name: "NETWORK", href: "/network" },
    { name: "FEATURES", href: "/features" },
    { name: "BUSINESS", href: "/business" },
    { name: "HOME PHONE", href: "/home-phone" },
    { name: "SHOP", href: "/shop" },
  ]

  const pathname = usePathname()

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto p-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/favicon.png"
              alt="SwiftConnect Logo"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full ${
                  pathname === link.href
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-[#ea464b] text-white"
                } text-sm font-bold`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#6b3032] font-bold text-sm shadow-md">
              TRY FOR FREE
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/favicon.png"
              alt="SwiftConnect Logo"
              width={130}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 border-b-4 border-[#ea464b]">
            {
              navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-6 py-2 rounded-full ${
                    pathname === link.href
                      ? "bg-[#1E1E1E] text-white"
                      : "bg-[#ea464b] text-white"
                  } text-sm font-bold`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))
            }
            <button className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#6b3032] font-bold text-sm shadow-md">
              TRY FOR FREE
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

