"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ResponsiveOfficeFeatures() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
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
  )
}






// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"

// export default function ResponsiveOfficeFeatures() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   return (
//     <section
//       className="relative py-16 h-[110vh] overflow-hidden"
//       style={{ backgroundImage: "url('/secondSection-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
//     >
//       <div className="container mx-auto px-4 relative">
//         {/* Center Person Image */}
//         {/* <div className="flex justify-center mb-8">
//           <Image
//             src="/secondSection.png"
//             alt="Student with Office 365"
//             width={400}
//             height={500}
//             className="relative"
//           />
//         </div> */}

//         {/* Red Arrow at bottom */}
//         {/* <div className="flex justify-center">
//           <div className="w-64 h-16 bg-[#c41e3a] clip-arrow"></div>
//         </div> */}

//         {isMobile ? (

//           // Mobile Layout - Vertical stack
//           <div className="space-y-6 mt-8">
//             {/* OneDrive */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">ONEDRIVE</h3>
//                 <p className="text-gray-700">Never run out of memory with up to 1TB of cloud storage.</p>
//               </div>
//             </div>

//             {/* Install on Multiple Devices */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect width="18" height="12" x="2" y="3" rx="2" />
//                     <rect width="8" height="10" x="14" y="11" rx="2" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">INSTALL ON MULTIPLE DEVICES</h3>
//                 <p className="text-gray-700">Install office up to 5PC</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect width="20" height="16" x="2" y="4" rx="2" />
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">EMAIL</h3>
//                 <p className="text-gray-700">Update your Outlook with up to 100GB mailbox</p>
//               </div>
//             </div>

//             {/* Autosave */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <circle cx="18" cy="18" r="3" />
//                     <circle cx="6" cy="6" r="3" />
//                     <path d="M13 6h3a2 2 0 0 1 2 2v7" />
//                     <path d="M11 18H8a2 2 0 0 1-2-2V9" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">AUTOSAVE EASY TO SHARE</h3>
//                 <p className="text-gray-700">
//                   Always in sync so you can use it anywhere and easily share your favorites
//                 </p>
//               </div>
//             </div>

//             {/* Office Apps */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
//                     <polyline points="14 2 14 8 20 8" />
//                     <path d="M2 15h10" />
//                     <path d="m9 18 3-3-3-3" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">WORD - EXCEL - POWERPOINT...</h3>
//                 <p className="text-gray-700">
//                   Improve learning outcomes with built-in features and learning tools that support your subjects
//                 </p>
//               </div>
//             </div>

//             {/* Microsoft Teams */}
//             <div className="bg-white rounded-lg p-6 border border-dashed border-gray-300 mx-auto">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-[#c41e3a] mb-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">MICROSOFT TEAMS</h3>
//                 <p className="text-gray-700">
//                   The tech hub integrates the conversations, calls, and conferences your organization needs to increase
//                   collaboration and engagement.
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Desktop Layout - Around the person
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 absolute top-0 left-0 w-full">
//             {/* Left Column */}
//             <div className="flex flex-col justify-between py-8">
//               {/* OneDrive */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">ONEDRIVE</h3>
//                   <p className="text-gray-700">Never run out of memory with up to 1TB of cloud storage.</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <rect width="20" height="16" x="2" y="4" rx="2" />
//                       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">EMAIL</h3>
//                   <p className="text-gray-700">Update your Outlook with up to 100GB mailbox</p>
//                 </div>
//               </div>

//               {/* Office Apps */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
//                       <polyline points="14 2 14 8 20 8" />
//                       <path d="M2 15h10" />
//                       <path d="m9 18 3-3-3-3" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">WORD - EXCEL - POWERPOINT</h3>
//                   <p className="text-gray-700">
//                     Improve learning outcomes with built-in features and learning tools that support your subjects
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Middle Column - Empty for the person image */}
//             <div className="hidden md:block"></div>

//             {/* Right Column */}
//             <div className="flex flex-col justify-between py-8">
//               {/* Multiple Devices */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <rect width="18" height="12" x="2" y="3" rx="2" />
//                       <rect width="8" height="10" x="14" y="11" rx="2" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">INSTALL ON MULTIPLE DEVICES</h3>
//                   <p className="text-gray-700">Install office up to 5PC</p>
//                 </div>
//               </div>

//               {/* Autosave */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <circle cx="18" cy="18" r="3" />
//                       <circle cx="6" cy="6" r="3" />
//                       <path d="M13 6h3a2 2 0 0 1 2 2v7" />
//                       <path d="M11 18H8a2 2 0 0 1-2-2V9" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">AUTOSAVE EASY TO SHARE</h3>
//                   <p className="text-gray-700">
//                     Always in sync so you can use it anywhere and easily share your favorites
//                   </p>
//                 </div>
//               </div>

//               {/* Microsoft Teams */}
//               <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 max-w-xs mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#c41e3a] mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="48"
//                       height="48"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                       <circle cx="9" cy="7" r="4" />
//                       <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">MICROSOFT TEAMS</h3>
//                   <p className="text-gray-700">
//                     The tech hub integrates the conversations, calls, and conferences your organization needs to
//                     increase collaboration and engagement.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }