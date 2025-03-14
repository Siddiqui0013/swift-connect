"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface Package {
  id: string
  name: string
  price: string
  duration: string
  command: string
  details: {
    internet: string
    office: string
    additionalInfo?: string
  }
}

export default function Page() {

  const [isMobile, setIsMobile] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const terms = [
    {
      number: 1,
      text: "Active 2-way Mobifone prepaid and postpaid subscribers",
    },
    {
      number: 2,
      text: "As a customer on the mobiEdu/Saymee ecosystem (Mobifone)",
    },
    {
      number: 3,
      text: "Subscribers must register for a service package to access and use.",
    },
    {
      number: 4,
      text: "Use smart devices such as smartphones, tablets, computers with Internet access",
    },
  ]

  const packages: Package[] = [
    {
      id: "of90",
      name: "OF90 PACKAGE",
      price: "90.000",
      duration: "01 month",
      command: "OF90 Send 999",
      details: {
        internet:
          "1 Gb/day of high-speed Internet access, when out of data, you can still use Data M0 service according to current regulations",
        office: "01 licensed Office 365 A3 account on the mobiEdu ecosystem",
      },
    },
    {
      id: "30f90",
      name: "30F90 PACKAGE",
      price: "270.000",
      duration: "03 month",
      command: "30F90 Send 999",
      details: {
        internet:
          "1 Gb/day of high-speed Internet access, when out of data, you can still use Data M0 service according to current regulations",
        office: "01 licensed Office 365 A3 account on the mobiEdu ecosystem",
        additionalInfo: "Save 10% compared to monthly subscription",
      },
    },
    {
      id: "60f90",
      name: "60F90 PACKAGE",
      price: "540.000",
      duration: "06 month",
      command: "60F90 send 999",
      details: {
        internet:
          "1 Gb/day of high-speed Internet access, when out of data, you can still use Data M0 service according to current regulations",
        office: "01 licensed Office 365 A3 account on the mobiEdu ecosystem",
        additionalInfo: "Save 15% compared to monthly subscription",
      },
    },
    {
      id: "90f90",
      name: "90F90 PACKAGE",
      price: "810.000",
      duration: "09 month",
      command: "90F90 Send 999",
      details: {
        internet:
          "1 Gb/day of high-speed Internet access, when out of data, you can still use Data M0 service according to current regulations",
        office: "01 licensed Office 365 A3 account on the mobiEdu ecosystem",
        additionalInfo: "Save 20% compared to monthly subscription",
      },
    },
    {
      id: "120f90",
      name: "120F90 PACKAGE",
      price: "1.080.000",
      duration: "12 month",
      command: "120F90 Send 999",
      details: {
        internet:
          "1 Gb/day of high-speed Internet access, when out of data, you can still use Data M0 service according to current regulations",
        office: "01 licensed Office 365 A3 account on the mobiEdu ecosystem",
        additionalInfo: "Save 25% compared to monthly subscription",
      },
    },
  ]
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[0])

  const syntaxCards = [
    {
      title: "SYNTAX",
      subtitle: "SERVICE REGISTRATION",
      command: "DK OF90 SEND",
      send: "999"
    },
    {
      title: "SYNTAX CANCELLATION OF",
      subtitle: "SERVICE REGISTRATION",
      command: "HUY OF90 SEND",
      send: "999"
    },
    {
      title: "SYNTAX SEARCH",
      subtitle: "THE PACKAGE IS IN USE",
      command: "KT ALL SEND",
      send: "999"
    }
  ];

  const visiblePackages = isMobile ? 1 : 3
  const displayedPackages = packages.slice(startIndex, startIndex + visiblePackages)

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const handleNext = () => {
    if (startIndex < packages.length - visiblePackages) {
      setStartIndex(startIndex + 1)
    }
  }

  const selectPackage = (pkg: Package) => {
    setSelectedPackage(pkg)
  }


  return (
    <main className="w-full">

    <section 
    style={{
      backgroundImage: "url('/hero-bg.png')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-full relative overflow-hidden">
      <div className="bg-gradient-to-br from-[#BA3034] to-[#EB5D66] opacity-90">
      <div className="container mx-auto px-4 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            BYE, OLD WIRELESS.
            <br />
            HELLO, SUPER CARRIER.
          </h1>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0078 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9.23 16.42H6.5V13.69H9.23V16.42ZM9.23 12.69H6.5V9.95997H9.23V12.69ZM9.23 8.95997H6.5V6.22997H9.23V8.95997ZM13.23 16.42H10.5V13.69H13.23V16.42ZM13.23 12.69H10.5V9.95997H13.23V12.69ZM13.23 8.95997H10.5V6.22997H13.23V8.95997ZM17.23 16.42H14.5V13.69H17.23V16.42ZM17.23 12.69H14.5V9.95997H17.23V12.69ZM17.23 8.95997H14.5V6.22997H17.23V8.95997Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#40e0ff]">UNLIMITED FLEX</h3>
                <p className="text-xl font-bold">$210 FOR 12 MONTHS</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <path d="M21.17 2.06C20.4087 1.93204 19.6308 1.99862 18.9044 2.25249C18.178 2.50637 17.5318 2.93575 17.03 3.5C16.01 4.65 15.55 6.21 15.92 7.86L16.03 8.34L15.36 9.01C14.5833 9.78667 13.8067 10.5633 13.03 11.34C12.2533 12.1167 11.4767 12.8933 10.7 13.67L10.03 14.34L9.55 14.23C7.9 13.86 6.35 14.32 5.19 15.34C4.62575 15.8418 4.19637 16.488 3.94249 17.2144C3.68862 17.9408 3.62204 18.7187 3.75 19.48C3.83931 19.9919 4.0291 20.4814 4.3067 20.9233C4.5843 21.3652 4.94511 21.7511 5.37 22.06C6.3 22.73 7.49 23 8.89 23C10.01 23 11.22 22.84 12.53 22.53C15.53 21.78 18.29 20.08 20.25 17.28C21.32 15.83 22 14.14 22 12.19C22 9.29 21.04 7.05 19.36 5.37L18.69 4.7L19.17 4.59C20.82 4.22 21.38 2.66 21.17 2.06ZM18.09 16.3C16.44 18.66 14.11 20.09 11.53 20.73C9.12 21.33 7.75 21.17 6.99 20.67C6.81557 20.5675 6.66193 20.4356 6.53736 20.2797C6.41279 20.1239 6.31948 19.9466 6.26189 19.7569C6.2043 19.5673 6.18343 19.3689 6.20043 19.1719C6.21743 18.9749 6.27198 18.783 6.36 18.61C6.75 17.95 7.48 17.73 8.17 17.91L9.15 18.15L9.83 17.47L11.24 16.06L12.65 14.65L14.06 13.24L15.47 11.83L16.15 11.15L15.91 10.17C15.73 9.5 15.95 8.76 16.61 8.37C16.783 8.28198 16.9749 8.22743 17.1719 8.21043C17.3689 8.19343 17.5673 8.2143 17.7569 8.27189C17.9466 8.32948 18.1239 8.42279 18.2797 8.54736C18.4356 8.67193 18.5675 8.82557 18.67 9C19.17 9.76 19.33 11.13 18.73 13.54C18.41 14.84 18.09 15.3 18.09 16.3Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#40e0ff]">GIVE AWAY COPYRIGHT</h3>
                <p className="text-xl font-bold">OFFICE 365</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero.png"
            alt="SwiftConnect Hero"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />

          {/* <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <h2 className="text-white text-xl md:text-2xl font-bold text-right">
              One Package
              <br />
              For Every Need
            </h2>
          </div> */}
        </div>
      </div>
    </div>

      </div>
  </section>
  
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "url('/secondSection-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4 relative">
          {isMobile ? (
            // Mobile Layout - Vertical stack
            <div className="space-y-6 py-6 mt-8">
              {/* OneDrive */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">ONEDRIVE</h3>
                  <p className="text-gray-700">Never run out of memory with up to 1TB of cloud storage.</p>
                </div>
              </div>
  
              {/* Install on Multiple Devices */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="12" x="2" y="3" rx="2" />
                      <rect width="8" height="10" x="14" y="11" rx="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">INSTALL ON MULTIPLE DEVICES</h3>
                  <p className="text-gray-700">Install office up to 5PC</p>
                </div>
              </div>
  
              {/* Email */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                  <p className="text-gray-700">Update your Outlook with up to 100GB mailbox</p>
                </div>
              </div>
  
              {/* Autosave */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                      <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">AUTOSAVE EASY TO SHARE</h3>
                  <p className="text-gray-700">
                    Always in sync so you can use it anywhere and easily share your favorites
                  </p>
                </div>
              </div>
  
              {/* Office Apps */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M2 15h10" />
                      <path d="m9 18 3-3-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">WORD - EXCEL - POWERPOINT...</h3>
                  <p className="text-gray-700">
                    Improve learning outcomes with built-in features and learning tools that support your subjects
                  </p>
                </div>
              </div>
  
              {/* Microsoft Teams */}
              <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#c41e3a] mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">MICROSOFT TEAMS</h3>
                  <p className="text-gray-700">
                    The tech hub integrates the conversations, calls, and conferences your organization needs to increase
                    collaboration and engagement.
                  </p>
                </div>
              </div>
              
              {/* Center Person Image for Mobile */}
              <div className="flex justify-center pt-4">
                <Image
                  src="/secondSection.png"
                  alt="Student with Office 365"
                  width={300}
                  height={400}
                />
              </div>
              
              {/* Red Arrow at bottom for Mobile */}
              <div className="flex justify-center mt-4">
                <div className="w-48 h-12 bg-[#c41e3a]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}></div>
              </div>
            </div>
          ) : (
            // Desktop Layout with central image at bottom
            <div className="relative py-6 ">
              {/* Features grid */}
              <div className="grid grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* OneDrive */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">ONEDRIVE</h3>
                      <p className="text-gray-700">Never run out of memory with up to 1TB of cloud storage.</p>
                    </div>
                  </div>
  
                  {/* Email */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                      <p className="text-gray-700">Update your Outlook with up to 100GB mailbox</p>
                    </div>
                  </div>
  
                  {/* Office Apps */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M2 15h10" />
                          <path d="m9 18 3-3-3-3" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">WORD - EXCEL - POWERPOINT</h3>
                      <p className="text-gray-700">
                        Improve learning outcomes with built-in features and learning tools that support your subjects
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Middle Column - Empty space for image that will be at the bottom */}
                <div className="relative">
                  {/* Center Person Image for Desktop - positioned at bottom */}
              <div className="flex flex-col justify-center absolute -bottom-4 left-0 right-0">
                <Image
                  src="/secondSection.png"
                  alt="Student with Office 365"
                  width={500}
                  height={600}
                />
                <div className="flex justify-center">
                <div className="w-80 h-12 bg-[#c41e3a]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}></div>
              </div>
              </div>
              
              {/* Red Arrow at bottom for Desktop */}
              
                </div>
  
                {/* Right Column */}
                <div className="space-y-8">
                  {/* Multiple Devices */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="12" x="2" y="3" rx="2" />
                          <rect width="8" height="10" x="14" y="11" rx="2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">INSTALL ON MULTIPLE DEVICES</h3>
                      <p className="text-gray-700">Install office up to 5PC</p>
                    </div>
                  </div>
  
                  {/* Autosave */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="18" cy="18" r="3" />
                          <circle cx="6" cy="6" r="3" />
                          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                          <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">AUTOSAVE EASY TO SHARE</h3>
                      <p className="text-gray-700">
                        Always in sync so you can use it anywhere and easily share your favorites
                      </p>
                    </div>
                  </div>
  
                  {/* Microsoft Teams */}
                  <div className="bg-white rounded-lg p-5 border border-dashed border-gray-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-[#c41e3a] mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">MICROSOFT TEAMS</h3>
                      <p className="text-gray-700">
                        The tech hub integrates the conversations, calls, and conferences your organization needs to
                        increase collaboration and engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#6b3032]">TERMS OF USE</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 md:p-0 px-12 items-center justify-center">
            {terms.map((term, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="bg-white">
                    
                </div>
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#ffb000] flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-3xl font-bold">{term.number}</span>
                </div>
  
                {/* Content Box */}
                <div className="bg-white rounded-lg p-2 pl-8 shadow-lg min-h-[120px] flex items-center">
                  <p className="text-[#472e0a] text-xl font-medium">{term.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          <section className="py-16 md:h-screen"
          style={{
              backgroundImage: "url('/packagesBg.png')", 
              // backgroundSize: "auto",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
          }}
          >
            <div className="container mx-auto px-4" 
            style={{
              backgroundImage: "url('/packagesCenterBg.png')", 
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
            >
              <div className="flex flex-col items-center lg:flex-row gap-8">
                  
                <div className="lg:w-[28%]">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-[#c41e3a] text-white p-6 flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{selectedPackage.name}</h3>
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
      
                    <div className="p-6 space-y-6 px-8">
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-[#c41e3a] font-bold mr-2">▶</span>
                          <div>
                            <span className="font-bold">1 Gb/day</span> of high-speed Internet access, when out of data, you
                            can still use Data M0 service according to current regulations
                          </div>
                        </div>
                      </div>
      
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-[#c41e3a] font-bold mr-2">▶</span>
                          <div>
                            <span className="font-bold">01 licensed Office 365 A3</span> account on the mobiEdu{" "}
                            <span className="font-bold">ecosystem</span>
                          </div>
                        </div>
                      </div>
      
                      {selectedPackage.details.additionalInfo && (
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <span className="text-[#c41e3a] font-bold mr-2">▶</span>
                            <div>{selectedPackage.details.additionalInfo}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
      
                <div className="lg:w-[72%]">
                  <h2 className="text-4xl font-bold text-[#c41e3a] mb-8 text-center">PACKAGE PRICE LIST</h2>
      
                  <div className="relative">
                    <button
                      onClick={handlePrevious}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
                      disabled={startIndex === 0}
                      aria-label="Previous packages"
                    >
                      <ChevronLeft className="w-6 h-6 text-red-600" />
                    </button>
      
                    <button
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
                      disabled={startIndex >= packages.length - visiblePackages}
                      aria-label="Next packages"
                    >
                      <ChevronRight className="w-6 h-6 text-red-600" />
                    </button>
      
                    <div className="flex gap-4 overflow-hidden">
                      {displayedPackages.map((pkg) => (
                        <div
                          key={pkg.id}
                          className={`flex-1 bg-white rounded-xl w-[300px] shadow-md overflow-hidden transition-all duration-300 m-2 cursor-pointer ${selectedPackage.id === pkg.id ? "ring-2 ring-[#c41e3a]" : ""}`}
                          onClick={() => selectPackage(pkg)}
                        >
                          <div className="p-4 border-b">
                            <h3 className="text-xl font-bold text-[#c41e3a] text-center">{pkg.name}</h3>
                          </div>
      
                          <div className="p-6 text-center">
                            <div className="text-4xl font-bold text-gray-800 mb-2">{pkg.price}</div>
                            <div className="text-gray-600 mb-6">HSD: {pkg.duration}</div>
      
                            <div className="border-2 border-[#c41e3a] rounded-full py-2 px-4 inline-block">
                              <span className="text-[#c41e3a] font-bold">{pkg.command.split(" ")[0]}</span>
                              <span className="text-black font-bold"> {pkg.command.split(" ")[1]} </span>
                              <span className="text-[#c41e3a] font-bold">{pkg.command.split(" ")[2]}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
      
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          <div className="mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#800000]">
          YOU ARE A MOBIFONE SUBSCRIBER
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syntaxCards.map((card, index) => (
            <div key={index} className="bg-gray-100  rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <p className="text-md font-bold text-black uppercase">{card.title}</p>
                <p className="text-md font-bold text-red-700 uppercase">{card.subtitle}</p>
              </div>
              
              <div className="border border-red-700 rounded-full py-2 px-4 flex items-center justify-center mx-auto w-fit">
                <span className="text-red-700 font-bold text-sm">{card.command}</span>
                <span className="text-black font-bold text-sm ml-1">{card.send}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  </main>
  )
}
