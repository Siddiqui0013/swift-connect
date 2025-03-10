"use client"

import { useState, useEffect } from "react"
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

export default function PackageSlider() {
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
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
  )
}

