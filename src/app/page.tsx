"use client"

import ResponsiveOfficeFeatures from "@/components/Responsive-office-features"
import TermsOfUse from '@/components/Terms-of-use'
import Footer from '@/components/Footer'
import Mobifone from "@/components/MobiFone"
import Image from 'next/image'
import Packages from "@/components/Packages"

export default function page() {
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
  <ResponsiveOfficeFeatures />
  <TermsOfUse />
  <Packages />
  <Mobifone />
  <Footer />
  </main>
  )
}
