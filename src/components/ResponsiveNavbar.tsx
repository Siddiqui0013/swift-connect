"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <Link href="#" className="px-4 py-2 rounded-full bg-[#6b3032] text-white text-sm font-bold">
              HOME
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              PLAN
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              NETWORK
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              FEATURES
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              BUSINESS
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              HOME PHONE
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              SHOP
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold">
              VIDEOS
            </Link>
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
          <div className="md:hidden mt-4 py-4 space-y-2">
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#6b3032] text-white text-sm font-bold text-center"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              PLAN
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              NETWORK
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              FEATURES
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              BUSINESS
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              HOME PHONE
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              SHOP
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 rounded-full bg-[#ea464b] text-white text-sm font-bold text-center"
            >
              VIDEOS
            </Link>
            <button className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#6b3032] font-bold text-sm shadow-md">
              TRY FOR FREE
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

