"use client";
import Image from "next/image";
import { useState } from "react";

export default function NetworkPage() {
  return (
    <>
        <NetworkHeroComponent />
    <SuperCarrierDetails />
    <IFrame />
    <NetworkComparison />
    </>
  )
}

const NetworkHeroComponent = () => {
  return (
    <div className="w-full md:h-[600px] overflow-hidden"
    style={{
      backgroundImage: "url('/networkHero.png')",
      backgroundSize: "cover",
      backgroundPosition: "top",

    }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12">
        <div className="max-w-2xl pt-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-600">What&apos;s better</span>
            <br />
            <span className="text-white">than one network?</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-white text-lg font-bold mb-6">
            We&apos;re a Super Carrier. Switch between all three of our networks
            anytime, anywhere, to get the best coverage possible.
          </p>
          
          {/* Tagline */}
          <p className="text-white italic text-sm">
            It&apos;s really that simple. Welcome to a new era in wireless.
          </p>
          
          {/* Action Buttons */}
          <div className="md:mt-8 my-8 flex space-x-4">
            <button className="bg-red-600 text-white md:px-6 md:py-3 p-3 rounded-lg hover:bg-red-700 transition-colors">
              Check Your Coverage
            </button>
            <button className="border border-white text-white md:px-6 md:py-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
              Compare Networks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuperCarrierDetails = () => {
  const [activeNetwork, setActiveNetwork] = useState('Super Carrier');

  const networks = [
    'Super Carrier',
    'Dark side',
    'Warp',
    'Light Speed'
  ];

  return (
    <div 
    style={{
      backgroundImage: "url('/network/networkDetails.png')",
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
    className="w-full h-[600px] overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 text-white">
        <div className="max-w-2xl">
          {/* Network Tabs */}
          <div className="mb-6 flex border-2 border-red-600 rounded-full p-1 space-x-2">
            {networks.map((network) => (
              <button
                key={network}
                className={`px-4 py-2 rounded-full text-sm w-[150px] ${
                  activeNetwork === network 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                onClick={() => setActiveNetwork(network)}
              >
                {network}
              </button>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            What even is a Super Carrier?
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg mb-6">
            We are glad you asked.
          </p>
          
          {/* Description */}
          <p className="text-lg mb-6">
            US Mobile lets you switch between all three major US networks
            whenever you want. Teleport your line between our Dark Star,
            Warp, and Light Speed networks and try them all out.
          </p>
          
          {/* Toggle Instruction */}
          <p className="italic text-md">
            Toggle below to see the power of each network.
          </p>

          {/* Decorative Wing Logo */}
          <div className="absolute top-6 right-6 opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

};

const IFrame = () => {
  return (
    <div className="w-full md:h-[600px] h-[500px] flex items-center justify-center overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        className="w-[80%] h-[450px] rounded-2xl border-4 border-red-600"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );

};

const NetworkComparison = () => {
  const networks = [
    {
      name: 'Warp',
      description: 'Our MVP for good reason.',
    },
    {
      name: 'Dark Star',
      description: 'Unmatched coverage.',
    },
    {
      name: 'Light Speed',
      description: 'Speed and compatibility.',
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 uppercase">
          COMPARE OUR <span className="text-red-600">NETWORKS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {networks.map((network) => (
            <div 
              key={network.name} 
              className="bg-[#ffdede] rounded-lg md:p-6 p-2 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 w-24 h-24 mx-auto">
              <Image
          src="/networkCards.png"
          alt="Warp Flag"
          width={100}
          height={100}
          className="w-full h-auto"
        />
              </div>
              <h3 className="text-2xl font-bold mb-2">{network.name}</h3>
              <p className="text-gray-700">{network.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};