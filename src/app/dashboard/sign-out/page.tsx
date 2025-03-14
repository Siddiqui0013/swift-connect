"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignOutPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would handle sign out logic here
    // For example, clearing tokens, cookies, etc.

    // Redirect to home page after a brief delay
    const timeout = setTimeout(() => {
      router.push("/")
    }, 2000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="max-w-md mx-auto text-center py-16">
      <h1 className="text-3xl font-bold mb-4">Signing Out...</h1>
      <p className="text-gray-600 mb-8">Thank you for using SwiftConnect. You are being signed out of your account.</p>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c41e3a] mx-auto"></div>
    </div>
  )
}

