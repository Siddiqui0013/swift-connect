"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  // Define pricing plans with features
  const pricingPlans = [
    {
        id : 1,
      name: "Migrations",
      monthlyPrice: 195,
      yearlyPrice: 1950,
      type: "Annual Subscription",
      features: [
        "Data Migration",
        "Simple Tax Preparation",
        "Fund Administration",
        "Fund Manager",
        "Fund Manager",
        "Investor Records"
      ]
    },
    {
        id : 2,
      name: "SPVs",
      monthlyPrice: 995,
      yearlyPrice: 9950,
      type: "Setup Cost",
      features: [
        "Series of Entity Included",
        "Bank Account",
        "Investor Onboarding",
        "Fund Manager",
        "Regulatory Filings",
        "Simple Tax Preparation"
      ],
    },
    {
        id : 3,
      name: "Funds",
      monthlyPrice: 1950,
      yearlyPrice: 19500,
      type: "Annual Subscription",
      features: [
        "30 Investments Included",
        "18 Month Raising Period",
        "36 Month Investing Period",
        "Annual Financial Statements",
        "Multiple Closes Supported"
      ]
    },
    {
        id : 4,
      name: "Custom Funds",
      monthlyPrice: 4950,
      yearlyPrice: 49500,
      type: "Annual Subscription",
      features: [
        "Custom Investments",
        "Custom Raising Period",
        "Custom Investment Period",
        "Custom Financial Statements",
        "Custom Financial Statements",
        "Custom Classes"
      ]
    }
  ]

  return (
    <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          We offer great <span className="text-[#c41e3a]">price</span> plan for the application
        </h2>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12 relative">
          <div className="bg-gray-100 rounded-full p-1 flex items-center">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-[#c41e3a] text-white' 
                  : 'text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'yearly' 
                  ? 'bg-[#c41e3a] text-white' 
                  : 'text-gray-700'
              }`}
            >
              Yearly
            </button>
          </div>
          
          {/* Savings Label */}
          {billingPeriod === 'yearly' && (
            <div className="absolute right-0 md:right-1/4 -top-2 transform -translate-y-1/2 md:translate-x-16">
              <div className="flex items-center">
                <span className="text-[#ffb000] font-bold text-sm">SAVE UP TO 30%</span>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden shadow-xl ${
                plan.id === selectedPlan
                  ? 'bg-[#1e1e1e] text-white' 
                  : 'bg-white'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">Starting at</p>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">/year</span>
                </div>
                <p className={`text-sm ${plan.id === selectedPlan ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  {plan.type}
                </p>
                
                <button 
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.id === selectedPlan
                      ? 'bg-[#c41e3a] text-white hover:bg-[#a01830]' 
                      : 'bg-[#1e1e1e] text-white hover:bg-[#333333]'
                  }`}
                >
                  Get Price Estimate
                </button>
                
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`mr-3 mt-1 ${plan.id === selectedPlan ? 'text-white' : 'text-[#c41e3a]'}`}>
                        <Check size={16} />
                      </div>
                      <span className={plan.id === selectedPlan ? 'text-gray-300' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-[#c41e3a] text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-[#a01830] transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
    <Video />
    <Roaming />
    <SwiftConnectPanel />
    <HomePhone />
    </>
    
  )
}

function Video () {
  return (
    <div className='flex flex-col w-[90%] md:flex-row items-center mx-auto justify-center gap-4 py-6 px-12'>
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        className='rounded-lg h-[300px] md:w-[500px] w-[350px]'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className=" mt-4 md:w-[60%]">
        <h2 className="text-2xl font-bold mb-2">Which plan is right for me?</h2>        
        <p className="text-gray-600 font-bold">It’s hard to make the wrong choice with plans this 
        good.</p>
        <p className="text-gray-600">Our goal is to help you maximize savings with the most value for 
your dollar. Understand Unlimited & Shareable Plans, important 
terms, and how to check your current data usage.</p>
      </div>
    </div>
)}

function Roaming (){
    return(
    <section className="bg-[#ffdede] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Passport Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-80">
              <Image
                src="/plan/roaming.png"
                alt="Passport to connectivity"
                width={600}
                height={800}
                style={{
                  filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))"
                }}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your passport to <span className="text-[#c41e3a]">connectivity</span>
            </h2>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[#c41e3a]">180+ countries.</span> All yours.
            </h3>
            
            <p className="text-lg">
              Stay connected wherever you go with roaming. Share your travel 
              moments, call and text loved ones, and easily look up that hidden 
              gem of a restaurant—all with the seamless connectivity of a local.
            </p>
            
            <p className="text-lg">
              Enjoy free roaming with Annual Unlimited Starter and Premium 
              plans* or add it to any plan for just $15. Because when you&apos;re 
              traveling, staying connected should be the least of your worries.
            </p>
            
            <p className="text-sm text-gray-700">
              *Prices and data limits vary based on plan selection.
            </p>
            
            <div>
              <button className="bg-[#c41e3a] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a01830] transition-colors uppercase">
                Discover Roaming
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
)}

const SwiftConnectPanel = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 m-8 w-full mx-auto font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold">
          <span className="text-black">The </span>
          <span className="text-red-600">SwiftConnect</span>
          <span className="text-black"> Magic</span>
        </h1>
        <p className="text-3xl mt-4 text-black">A premium experience as standard.</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-[#ffdede] p-6 rounded-3xl flex flex-col items-center text-center border border-pink-200">
          <div className="text-red-600 mb-6">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,15 C55,35 75,45 85,50 C75,55 55,65 50,85 C45,65 25,55 15,50 C25,45 45,35 50,15 Z" 
                stroke="currentColor" strokeWidth="6" fill="none" />
            </svg>
          </div>
          <p className="text-lg font-medium">
            Stay connected no matter what, with unlimited talk, text, and data to keep you in the loop.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ffdede] p-6 rounded-3xl flex flex-col items-center text-center border border-pink-200">
          <div className="text-red-600 mb-6">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="50" cy="50" r="15" fill="currentColor" />
              <line x1="50" y1="25" x2="50" y2="15" strokeWidth="3" />
              <line x1="50" y1="85" x2="50" y2="75" strokeWidth="3" />
              <line x1="25" y1="50" x2="15" y2="50" strokeWidth="3" />
              <line x1="85" y1="50" x2="75" y2="50" strokeWidth="3" />
              <circle cx="25" cy="25" r="8" fill="currentColor" />
              <circle cx="75" cy="25" r="8" fill="currentColor" />
              <circle cx="25" cy="75" r="8" fill="currentColor" />
              <circle cx="75" cy="75" r="8" fill="currentColor" />
            </svg>
          </div>
          <p className="text-lg font-medium">
            Nationwide 5G and 4G coverage keeps you connected wherever you go.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#ffdede] p-6 rounded-3xl flex flex-col items-center text-center border border-pink-200">
          <div className="text-red-600 mb-6">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="50" cy="50" r="30" />
              <path d="M30,55 Q50,75 70,55" />
              <rect x="35" y="35" width="30" height="20" rx="5" />
              <circle cx="20" cy="40" r="12" />
              <circle cx="80" cy="40" r="12" />
              <path d="M32,35 L32,25 Q32,15 42,15 L58,15 Q68,15 68,25 L68,35" />
            </svg>
          </div>
          <p className="text-lg font-medium">
            24/7 customer support agents help you over the phone, chat, or email whenever you need.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ffdede] p-6 rounded-3xl flex flex-col items-center text-center border border-pink-200">
          <div className="text-red-600 mb-6">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M50,15 L60,45 L30,65 L50,85 L70,65 L40,45 Z" fill="none" strokeWidth="4" />
            </svg>
          </div>
          <p className="text-lg font-medium">
            No SIM card required. Get on US Mobile in minutes using eSIM technology.
          </p>
        </div>
      </div>
    </div>
  );
}

const HomePhone = () =>{
    return(
        <div className="flex flex-col w-[90%] md:mx-auto md:flex-row items-center justify-center gap-4 py-6 px-12">
            <div className="bg-[#ffdede] rounded-full overflow-hidden">
            <Image src="/plan-homePhone.png" alt="Home Phone" width={400} height={400} className="rounded-lg" />
            </div>
            <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold">Home Phone <span>Plan $9.99</span></h2>
                <p className="text-lg">Unlimited nationwide calling starting from $9.99/month
                (taxes & fees included).</p>
                <p className="text-lg">Keep your current home phone number (or get a new 
                    one) and join the quiet landline revolution..</p>
            </div>
        </div>
    )
}