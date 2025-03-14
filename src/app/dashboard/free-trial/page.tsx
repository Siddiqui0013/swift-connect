export default function FreeTrialPage() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Start a Free Trial</h1>
  
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">30-Day Free Trial Offer</h2>
          <p className="text-gray-600 mb-4">
            Eligible new customers will receive a 30-day free trial when transferring up to two phone numbers to our 5G
            networks. During the 30-day trial, customers will have 30 GB of data, as well as Unlimited Talk & Text for the
            entire trial duration.
          </p>
  
          <div className="bg-[#ffebeb] p-4 rounded-md mb-6">
            <h3 className="font-bold mb-2">What is included:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>30 GB of high-speed data</li>
              <li>Unlimited Talk & Text</li>
              <li>Access to our nationwide 5G network</li>
              <li>No commitment - cancel anytime</li>
            </ul>
          </div>
  
          <button className="bg-[#c41e3a] text-white px-6 py-3 rounded-md font-bold hover:bg-[#a01830] transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    )
  }
  
  