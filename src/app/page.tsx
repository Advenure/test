


import BlogsHome from "./allBlags/blagshome/page";
import BlogsFour from "./allBlags/bloagsfour/page";
import Blogstwo from "./allBlags/blogstwo/page";
import MyBlogs from "./allBlags/myblogs/page";

import HeroSection from "./partone/herosection/page";
import HeroSection2 from "./partone/herosectiontwo/page";






export default function Home() {
  return (
    <div>
  
      <HeroSection/>
      <BlogsHome/>
      <Blogstwo/>
      <BlogsFour/>
      <MyBlogs/>
        
      <HeroSection2/>

    </div>
  );
}
