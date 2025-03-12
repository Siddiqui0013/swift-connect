import Image from "next/image"

export default function page() {
  return (
    <>
    <Hero/>
    <LandlinePhonePlans />
    <HowItWorks/>
    <ServicePrivileges/>
    </>
  )
}

const Hero = ()=>{
     return (
      <section 
      style={{
        backgroundImage: "url('/hero-bg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full overflow-hidden">
        <div className="bg-gradient-to-br from-[#BA3034] to-[#EB5D66] opacity-90">
        <div className="container mx-auto px-4 md:pt-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl font-extrabold leading-tight">
              Home Phones. Made Simple.
            </h1>
  
                  <p className="text-xl font-bold">Unlimited nationwide calling starting from $9.99/mo. 
                  Join the quiet landline revolution.</p>
                  <p className="text-xl">Have a question? Call our landline specialists at 1-878-205-0205</p>

              <button className="bg-gradient-to-br from-[#FFD659] to-[#ED940E]  text-amber-950 font-bold md:py-4 py-2 px-4 md:px-8 rounded-full text-xl">SAVE ON YOUR MOBILE LANDLINE</button>

            </div>

                            <Image
              src="/home-phoneHero.png"
              alt="SwiftConnect Hero"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />

            </div>
  
        </div>
        </div>
    </section>
    )
}

const LandlinePhonePlans = () => {
  const plans = [
    {
      name: 'US Mobile',
      logo: (
        <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="50" fill="white"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fill="blue">
            US Mobile
          </text>
        </svg>
      ),
      price: '$9.99/MO',
      description: 'ON AN ANNUAL PLAN'
    },
    {
      name: 'Community Phone',
      logo: (
        <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="50" fill="white"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fill="green">
            Community Phone
          </text>
        </svg>
      ),
      price: '$39/MO',
      description: 'PER-MINUTE CHARGE FOR INTL. CALLS'
    },
    {
      name: 'AT&T',
      logo: (
        <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="50" fill="white"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fill="blue">
            AT&T
          </text>
        </svg>
      ),
      price: '$39/MO',
      description: 'PER-MINUTE CHARGE FOR INTL. CALLS'
    },
    {
      name: 'Consumer Cellular',
      logo: (
        <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="50" fill="white"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fill="orange">
            Consumer Cellular
          </text>
        </svg>
      ),
      price: '$39/MO',
      description: 'PER-MINUTE CHARGE FOR INTL. CALLS'
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-10 uppercase">
        ONE
          <span className="text-red-600">
           { } LANDLINE PHONE PLAN  
            </span>
            { } TO RULE THEM ALL
        </h2>
        <p className="text-center mb-10 text-lg">
          GET 1 MONTH FREE OF OUR HOME PHONE MONTHLY PLAN WHEN YOU BUY OUR HOME PHONE BASE!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="bg-[#ffdede] rounded-lg md:p-6 p-2 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 w-full h-24 flex items-center justify-center">
                {plan.logo}
              </div>
              <div className="text-red-600 text-2xl font-bold mb-2">
                {plan.price}
              </div>
              <div className="text-gray-700 uppercase text-sm">
                {plan.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'ORDER EQUIPMENT',
      description: 'PLACE AN ORDER FOR ANY NECESSARY EQUIPMENT, SUCH AS A HOME PHONE BASE OR DEVICE.'
    },
    {
      number: '2',
      title: 'ACTIVATE YOUR PLAN',
      description: 'ONCE YOU RECEIVE THE ROUTER AND THE INCLUDED SIM CARD SIMPLY FOLLOW THE PROVIDED INSTRUCTIONS TO ACTIVATE. READY TO ACTIVATE?'
    },
    {
      number: '3',
      title: 'SET UP AND ENJOY',
      description: 'FOLLOW INSTRUCTIONS TO SET UP THE EQUIPMENT, CONNECT YOUR HOME PHONE, AND START ENJOYING.'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 uppercase">
          HOW DOES <span className="text-red-600">IT</span> WORK?
        </h2>
        <p className="text-center text-lg mb-12 uppercase">
          GETTING STARTED ON US MOBILE HOME PHONE IS EASY.
        </p>

        <div className="flex flex-col md:gap-8 gap-4">
          {steps.map((step) => (
            <div 
              key={step.number}
              className=" flex rounded-lg p-2 md:p-6 items-center justify-start gap-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
{/*  */}

              <div className="md:text-6xl text-4xl font-bold bg-[#ffdede] p-6 mb-4 rounded-md">
                {step.number}
              </div>
              <div className="flex flex-col">
              <h3 className="text-red-600 md:text-2xl text-xl font-bold mb-4 uppercase">
                {step.title}
              </h3>
              <p className="text-gray-700 uppercase">
                {step.description}
              </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicePrivileges = () =>{
  return(
        <div className="p-4 md:p-8 lg:p-12 m-8 w-full mx-auto font-sans">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold">
              <span className="text-black">Unvieling your </span>
              <span className="text-red-600">Service Privileges</span>
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
  )
}
