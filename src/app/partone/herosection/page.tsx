import Image from "next/image"
export default function HeroSection(){
    return(

<div className="text-white  items-center  flex">
      
        <div className="w-[1100px] h-[550x]  max-lg:text-center  bg-[#2A254B] px-5 ">
          <h2 className=" justify-items-center lg:text-4xl leading-relaxed justify-center  mt-10 text-4xl ">The furniture brand for the future, <br />with timeless designsFrom a studio 
          </h2>
          <button type='button'
            className="hover:-translate-y-2 mb-20 mt-4 transition-all border-2  border-gray-800  font-bold text-sm rounded-md px-6 py-2.5 ml-10 bg-gray-600 hidden md:block">Get Started</button>
            <div className=" lg:float-left mt-40 ">
          <p className="leading-relaxed  texl-xl">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade,When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade ,When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade</p>
          <button type='button'
            className="hover:-translate-y-2 transition-all border-2  border-gray-800   font-bold text-sm rounded-md w-full px-3 py-2.5 mb-3 bg-gray-600 md:hidden">Get Started</button>
         </div>
        </div>

        <div className="hidden md:flex items-center place-items-center justify-center h-[500px] w-[445px]">
           <Image src={"/Right Image.png"} alt="logo" height={520} width={584} className=" place-items-center justify-center"></Image> 
        </div>
    
        
        </div>
       
    

    )
}
