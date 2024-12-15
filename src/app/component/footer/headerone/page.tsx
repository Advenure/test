import Link from "next/link"
import React from "react"
import { MdFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-[#2A254B] py-12 px-10 ">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div>
            <h4 className="text-white text-lg mb-6">Use Cases</h4>
            <ul className="space-y-4">
             <li  className="text-gray-300 hover:text-white text-[15px]"> Web designers   </li>
              <li className="text-gray-300 hover:text-white text-[15px]"> Marketers  </li>
              <li className="text-gray-300 hover:text-white text-[15px]" >Marketers  </li>
             
             
              <li > business</li>
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Themes</Link></li>
              <li className="text-[15px]"><Link href=")" className="text-gray-300 hover:text-white text-[15px]">Website
                builter</Link>
              </li>
            </ul>
  
          </div>
  
          <div>
            <h4 className="text-white text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Landing page</Link>
              </li>
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Popup builder</Link>
              </li>
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Web design</Link>
              </li>
              <li className="text-[15px]"><Link href="" className="text-gray-300 hover:text-white text-[15px]">Content</Link></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Academy</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Blog</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white text-[15px]">Developer</Link>
              </li>
              </ul>
            
          </div>
          <div className="bg-white  px-1 py-1 rounded- text-left w-full h-[40px] rounded-sm lg:mt-20 flex">
            
              <input type='email' placeholder='your@email.com' className="w-full outline-none bg-[#322d4d] pl-4 text-[15px]" />
              <button className="px-1  py-1 rounded ">SingUp</button>
              
            </div>
         
  
         
        </div>
        
  
        <hr className="my-12 border-gray-400" />
  
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            
          </div>
  
          
        </div>
        <div className="block lg:flex justify-between items-center text-white">
  
        <p className='text-[15px] mt-6'>© ReadymadeUI. All rights reserved.</p>
        <div className=" flex gap-5 text-2xl mt-5 items-center justify-center">
          <span><MdFacebook /></span>
          <span><FaTiktok /></span>
          <span><TiSocialYoutube /></span>
          <span><FaLinkedin /> </span>
         
   
        </div>
        </div>

      </footer>
    )
}