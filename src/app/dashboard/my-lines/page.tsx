export default function MyLinesPage() {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Lines</h1>
          <button className="bg-[#c41e3a] text-white px-4 py-2 rounded-md font-medium hover:bg-[#a01830] transition-colors">
            Add a New Line
          </button>
        </div>
  
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">You do not have any active lines yet.</p>
            <p className="text-gray-500 mb-6">Get started by adding a new line or activating a free trial.</p>
  
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#c41e3a] text-white px-6 py-3 rounded-md font-bold hover:bg-[#a01830] transition-colors">
                Start a Free Trial
              </button>
              <button className="border border-[#c41e3a] text-[#c41e3a] px-6 py-3 rounded-md font-bold hover:bg-[#ffebeb] transition-colors">
                Add a New Line
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  