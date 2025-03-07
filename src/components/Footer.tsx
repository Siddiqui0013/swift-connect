"use client"

import Image from "next/image"

export default function SwiftConnectHeader() {
  return (
    <header className="bg-[#EFEFEF] py-8 px-4 border-b border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center mb-3 md:mb-0">
          <Image
            src="/favicon.png"
            alt="SwiftConnect Logo"
            width={60}
            height={60}
            className="mr-2"
          />
          <div>
            <h1 className="text-lg font-bold text-red-700">SwiftConnect</h1>
            <p className="text-xs text-gray-600">Swift. Secure. Connected</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span>0986 53 22 88</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <span>Support@abcvn.vn</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span>Tòa Ladihomes, 643 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội</span>
          </div>
        </div>
      </div>
    </header>
  )
}