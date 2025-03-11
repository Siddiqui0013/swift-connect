"use client"
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function BusinessPage() {
  return (
    <div  
      className="relative min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: 'url("/networkHero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <SwiftConnectBusinessHero />
        <PricingCards/>
        <Video/>
        <FaqSection/>
      </div>
    </div>
  )
}

const SwiftConnectBusinessHero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white text-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-white">SWIFT</span>
        <span className="text-red-600">CONNECT</span>
        <span className="text-white"> FOR BUSINESS</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl">
        The most powerful & flexible connectivity platform for businesses of all sizes
      </p>

      <iframe
        className="w-full max-w-4xl h-[450px] shadow-2xl shadow-amber-50 border-4 border-red-600 rounded-2xl mb-8"
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
        title="SwiftConnect Business Overview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="flex space-x-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
          SIGN UP NOW
        </button>
        <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
          SCHEDULE A LIVE DEMO
        </button>
      </div>
    </div>
  );
};

const PricingCards = () => {
  const pricingPlans = [
    {
      data: '2 GB',
      price: '$150',
      highlight: false
    },
    {
      data: '5 GB',
      price: '$200',
      highlight: false
    },
    {
      data: '8 GB',
      price: '$300',
      highlight: false
    },
    {
      data: '10 GB',
      price: '$350',
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-12 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Plans for every kind 
of business
      </h1>
      <p className="text-lg md:text-2xl mb-8">
      Our shareable data plans come with unlimited talk & text. No contracts. No commitment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index}
            className={`
              bg-white 
              border 
              rounded-lg 
              p-6 
              text-center 
              transition-all 
              duration-300 
              ${plan.highlight 
                ? 'border-red-500 shadow-xl scale-105' 
                : 'border-gray-200 hover:shadow-md'
              }
            `}
          >
            <div className="text-3xl font-bold mb-4">{plan.data}</div>
            <div className="text-red-600 text-2xl font-bold mb-4">
              {plan.price}
              <span className="text-base">/month</span>
            </div>
            <div className="text-gray-500 text-sm">
              Taxes & fees included
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Video () {
  return (
    <div className='flex flex-col w-[90%] md:flex-row items-center mx-auto justify-center gap-4 py-6 px-12'>
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        className='rounded-lg h-[300px] md:w-[500px] w-[350px] shadow-2xl shadow-amber-50 border-4 border-red-600'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className=" mt-4 md:w-[60%]">
        <h2 className="text-2xl font-bold mb-2">Which plan is right for me?</h2>        
        <p className="font-bold">It’s hard to make the wrong choice with plans this 
        good.</p>
        <p>Our goal is to help you maximize savings with the most value for 
your dollar. Understand Unlimited & Shareable Plans, important 
terms, and how to check your current data usage.</p>
      </div>
    </div>
)}

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  
  const faqItems: FaqItem[] = [
    {
      question: "How does the free trial work?",
      answer: "Eligible new customers will receive a 30-day free trial when transferring up to two phone numbers to our 5G networks. During the 30-day trial, customers will have 30 GB of data, as well as Unlimited Talk & Text for the entire trial duration."
    },
    {
      question: "Who should use US Mobile?",
      answer: "Anyone looking for flexible, affordable mobile plans with great coverage should consider US Mobile. We're perfect for individuals, families, travelers, students, and businesses who want customizable plans without contracts or hidden fees."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply choose a plan that fits your needs, order a SIM card or eSIM, and activate your service online. You can transfer your existing number or get a new one, and our support team is available 24/7 to help with any questions."
    },
    {
      question: "How do family plan discounts work?",
      answer: "Our family plans offer increasing discounts based on the number of lines you add. You'll get $2 off per line for 2 lines, $3 off per line for 3 lines, and $4 off per line for 4+ lines. Each family member can choose their own data plan while still benefiting from the multi-line discount."
    },
    {
      question: "How does billing work?",
      answer: "We offer prepaid service with no contracts. You'll be billed at the beginning of each cycle for your selected plan. You can change your plan at any time, and we offer auto-pay for convenience. All charges are clearly displayed on your account with no hidden fees."
    },
    {
      question: "What is a Top Up?",
      answer: "A Top Up is an additional data, talk, or text allowance you can add to your plan if you need more before your billing cycle ends. Top Ups are one-time purchases that give you immediate access to more service without changing your monthly plan."
    }
  ]
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }
  
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          You got questions? <span className="text-[#c41e3a]">we got answers! </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div 
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-bold text-black">{item.question}</h3>
                <div className={`flex items-center justify-center text-black w-8 h-8 rounded-md ${openIndex === index ? 'bg-[#c41e3a]' : 'bg-[#c41e3a]'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
