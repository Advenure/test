export default function Blogstwo(){
    return(
        <div className="bg-[#F7F7F7] ]">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">Discover Our Exclusive Features</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
               
                <h3 className="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Tailor our product to suit your needs Tailor our product to suit your needs.</p>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                
                <h3 className="text-gray-800 text-xl font-semibold mb-3">Security</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Your data is protected by the latest security measures.</p>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
               
                <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Experience blazing-fast performance with our product.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}