export default function TermsOfUse() {
    const terms = [
      {
        number: 1,
        text: "Active 2-way Mobifone prepaid and postpaid subscribers",
      },
      {
        number: 2,
        text: "As a customer on the mobiEdu/Saymee ecosystem (Mobifone)",
      },
      {
        number: 3,
        text: "Subscribers must register for a service package to access and use.",
      },
      {
        number: 4,
        text: "Use smart devices such as smartphones, tablets, computers with Internet access",
      },
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#6b3032]">TERMS OF USE</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
            {terms.map((term, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="bg-white">
                    
                </div>
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#ffb000] flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-3xl font-bold">{term.number}</span>
                </div>
  
                {/* Content Box */}
                <div className="bg-white rounded-lg p-8 pl-12 shadow-lg min-h-[120px] flex items-center">
                  <p className="text-[#472e0a] text-xl font-medium">{term.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  