
        import Blogstwo from "../allBlags/blogstwo/page";
      
        import Image from "next/image";
        
        export default function Abouttwo(){
          return(
            <div>
                 <div className="">
              <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 mb-2">
                <div className="bg-[#2A254B]  max-md:order-2 max-lg:text-center sm:p-12 p-4">
                  <h2 className="text-white lg:text-5xl text-xl ">From a studio in London to a global brand with
                  </h2>
                  <p className="text-white mt-6 text-base leading-relaxed">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, </p>
                  <p className="text-white mt-6 text-base leading-relaxed"> breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                  <button type='button'
                    className="hover:-translate-y-2 transition-all border-2  border-gray-800 mt-20  text-white font-bold text-sm rounded-md px-6 py-2.5 hover: bg-[#bdbdc6]">Get Started</button>
                </div>
        
                <div className="lg:h-[480px] flex items-center">
                <Image className="w-full h-full object-cover" src={"/Image Block.png"} width={720} height={603} alt="logo" ></Image>
                 
                </div>
            
                
                </div>
                
              </div>
              <div className="">
              <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 mb-2">
              <div className="lg:h-[480px] flex items-center">
              <Image className="w-full h-full object-cover" src={"/Image (3).png"} width={720} height={603} alt="logo" ></Image>
                </div>
                <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
                  <h2 className="text-gray-600 lg:text-5xl text-xl ">From a studio in London to a global brand with
                  </h2>
                  <p className="text-gray-600 mt-6 text-base leading-relaxed">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, </p>
                  <p className="text-gray-600 mt-6 text-base leading-relaxed"> breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                  <button type='button'
                    className="hover:-translate-y-2 transition-all border-2  border-gray-800 mt-20  text-gray-600 font-bold text-sm rounded-md px-6 py-2.5 hover: bg-[#81819a]">Get Started</button>
                </div>
                </div>
               
              </div>
              <div><Blogstwo/></div>
            
                </div>
            
        
            )
        }

