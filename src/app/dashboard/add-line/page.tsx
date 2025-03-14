export default function AddLinePage() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add a New Line</h1>
  
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Choose Your Plan Type</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#c41e3a] cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-2">Individual Line</h3>
              <p className="text-gray-600 mb-4">Perfect for personal use with customizable data options.</p>
              <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a01830] transition-colors">
                Select
              </button>
            </div>
  
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#c41e3a] cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-2">Family Plan Line</h3>
              <p className="text-gray-600 mb-4">Add a line to your existing family plan with shared data.</p>
              <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a01830] transition-colors">
                Select
              </button>
            </div>
          </div>
  
          <h2 className="text-xl font-bold mb-4">Transfer Options</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#c41e3a] cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-2">Keep Your Number</h3>
              <p className="text-gray-600 mb-4">Transfer your existing number from another carrier.</p>
              <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a01830] transition-colors">
                Select
              </button>
            </div>
  
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#c41e3a] cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-2">Get a New Number</h3>
              <p className="text-gray-600 mb-4">Choose a new phone number from our available options.</p>
              <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a01830] transition-colors">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  