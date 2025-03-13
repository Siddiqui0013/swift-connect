"use client"
import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
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
    <div className="min-h-[80vh] flex relative flex-col">
      {/* Header */}
      <div className="bg-[#b80000] py-8 h-60 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white text-3xl font-bold">LOGIN</h1>
        </div>
      </div>

      <div className="flex-grow absolute top-16 left-0 right-0 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-[#b80000] text-xl font-bold mb-4">PERSONAL INFORMATION</h2>
              <div className="border-b-2 border-[#b80000] mb-8"></div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
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

                    <p className="text-lg text-gray-600 mt-2"> Don&apos;t have an account? <Link href="/register" className="text-[#b80000] font-bold">Register</Link></p>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="px-12 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#b80000] font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-md"
                    >
                      LOGIN
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