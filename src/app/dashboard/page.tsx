import Image from "next/image"
import { Users, Zap, RefreshCw } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-8">You have no active lines</p>

        {/* Avatar Images */}
        <div className="flex justify-center space-x-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-[#c41e3a] rounded-full p-1">
              <Image
                src={`/placeholder.svg?height=80&width=80&text=Avatar${i}`}
                alt={`Avatar ${i}`}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
        <h1 className="text-5xl font-bold text-[#c41e3a] mb-4">Swift Connect</h1>
        <p className="text-gray-600 text-lg mb-12">
          We&apos;re excited to have you. Here are some first steps you can take.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#ffebeb] rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-10 w-10 text-[#c41e3a]" />
          </div>
          <h3 className="font-bold text-lg mb-2">Activate a shareable data plan</h3>
          <p className="text-sm text-gray-700">
            Share data across multiple lines.
            <br />
            Unlimited Talk & Text
          </p>
        </div>

        <div className="bg-[#ffebeb] rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <Zap className="h-10 w-10 text-[#c41e3a]" />
          </div>
          <h3 className="font-bold text-lg mb-2">Start your 30 day free trial</h3>
          <p className="text-sm text-gray-700">
            Try us for free if you transfer your
            <br />
            number!
          </p>
        </div>

        <div className="bg-[#ffebeb] rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <RefreshCw className="h-10 w-10 text-[#c41e3a]" />
          </div>
          <h3 className="font-bold text-lg mb-2">Activate an Unlimited line</h3>
          <p className="text-sm text-gray-700">Unigiad Date lolol</p>
        </div>
      </div>

      <div className="text-center text-gray-600">
        <p>
          Here&apos;s where your lines will appear once you&apos;ve
          <br />
          activated your first one
        </p>
      </div>
    </div>
  )
}

