export default function MyBlogs(){
    return(
    //    
    <div className="bg-white p-8 font-[sans-serif]">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-gray-800 text-4xl font-extrabold ">Join the club and get the benefits</h2>
      <div className="mt-12">
        <p className="text-gray-800 text-base">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
      </div>

      <div className="bg-white  px-1 py-1 rounded- text-left w-full h-[40px] rounded-sm lg:mt-20 flex">
          
            <input type='email' placeholder='your@email.com' className="w-full outline-none  pl-4 text-[15px]" />
            <button className="px-4  py-1 rounded bg-[#322d4d] text-white ">SingUp</button>
            
          </div>
    </div>
  </div>
    )
}