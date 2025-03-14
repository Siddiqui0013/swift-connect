"use client"

import { useState } from "react"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// const data = [
//   { name: "Jan", data: 0 },
//   { name: "Feb", data: 0 },
//   { name: "Mar", data: 0 },
//   { name: "Apr", data: 0 },
//   { name: "May", data: 0 },
//   { name: "Jun", data: 0 },
//   { name: "Jul", data: 0 },
//   { name: "Aug", data: 0 },
//   { name: "Sep", data: 0 },
//   { name: "Oct", data: 0 },
//   { name: "Nov", data: 0 },
//   { name: "Dec", data: 0 },
// ]

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("monthly")

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Usage Analytics</h1>

        <div className="flex gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>

          <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md font-medium hover:bg-[#a01830] transition-colors">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-500 mb-2">Data Usage</h2>
          <p className="text-3xl font-bold">0 GB</p>
          <p className="text-sm text-gray-500">of 0 GB used</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-500 mb-2">Talk Time</h2>
          <p className="text-3xl font-bold">0 min</p>
          <p className="text-sm text-gray-500">Unlimited available</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-500 mb-2">Text Messages</h2>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-gray-500">Unlimited available</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Data Usage Over Time</h2>

        <div className="h-80">
          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="data" fill="#c41e3a" />
            </BarChart>
          </ResponsiveContainer> */}
        </div>

        <p className="text-center text-gray-500 mt-4">
          No usage data available yet. Data will appear here once you start using your lines.
        </p>
      </div>
    </div>
  )
}

