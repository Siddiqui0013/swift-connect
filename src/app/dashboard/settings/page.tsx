"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-4 font-medium ${
              activeTab === "account"
                ? "text-[#c41e3a] border-b-2 border-[#c41e3a]"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("account")}
          >
            Account
          </button>
          <button
            className={`px-6 py-4 font-medium ${
              activeTab === "billing"
                ? "text-[#c41e3a] border-b-2 border-[#c41e3a]"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("billing")}
          >
            Billing
          </button>
          <button
            className={`px-6 py-4 font-medium ${
              activeTab === "notifications"
                ? "text-[#c41e3a] border-b-2 border-[#c41e3a]"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={`px-6 py-4 font-medium ${
              activeTab === "security"
                ? "text-[#c41e3a] border-b-2 border-[#c41e3a]"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        <div className="p-6">
          {activeTab === "account" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Account Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="pt-4">
                  <button className="bg-[#c41e3a] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a01830] transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Billing Information</h2>
              <p className="text-gray-600">No billing information available yet.</p>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
              <p className="text-gray-600">Configure your notification settings here.</p>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Security Settings</h2>
              <p className="text-gray-600">Manage your account security settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}