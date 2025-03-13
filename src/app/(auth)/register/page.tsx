"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    idNumber: "",
    dateOfIssue: "",
    placeOfIssue: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-[115vh] flex relative flex-col">
      {/* Header */}
      <div className="bg-[#b80000] py-8 h-60 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white text-3xl font-bold">REGISTER</h1>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex-grow absolute top-16 left-0 right-0 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-[#b80000] text-xl font-bold mb-4">REGISTRATION INFORMATION</h2>
              <div className="border-b-2 border-[#b80000] mb-8"></div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <label htmlFor="fullName" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
                      Full Name :
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <label htmlFor="password" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
                      Password :
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col md:flex-row md:items-center">
                    <label htmlFor="email" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                      required
                    />
                  </div>

                  {/* ID, Date and Place of Issue */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="idNumber" className="text-gray-800 font-medium mb-2">
                        CMND/CCCD :
                      </label>
                      <input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="dateOfIssue" className="text-gray-800 font-medium mb-2">
                        Date of issue:
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="dateOfIssue"
                          name="dateOfIssue"
                          value={formData.dateOfIssue}
                          onChange={handleChange}
                          placeholder="dd/mm/yy"
                          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="placeOfIssue" className="text-gray-800 font-medium mb-2">
                        Place of issue :
                      </label>
                      <input
                        type="text"
                        id="placeOfIssue"
                        name="placeOfIssue"
                        value={formData.placeOfIssue}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b80000]"
                      />
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mt-2"> Already have an account? <Link href="/login" className="text-[#b80000] font-bold">Login</Link></p>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="px-12 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#b80000] font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-md"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}