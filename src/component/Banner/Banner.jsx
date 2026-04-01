import React from "react";
import banner from "../../assets/products/banner.png";
import { IoPlay } from "react-icons/io5";

const Banner = () => {
  return (
    // Puru screen jure thakar jonno w-full use kora hoyeche
    <div className="w-full">
      
      {/* Container main content-ke majkhane rakhe ar px-4/md:px-10 diye duipase gap banay */}
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Banner area-r height ar spacing set kora hoyeche ekhane */}
        <div className="relative min-h-[600px] flex items-center overflow-hidden py-10 lg:py-20">
          
          {/* Grid diye content-ke bame (left) ar chabi-ke dane (right) kora hoyeche */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
            
            {/* Bam diker likha ar buttons */}
            <div className="space-y-6">
              
              {/* New badge: Picture-er moto glow animation soho */}
<div className="inline-flex items-center gap-3 bg-[#EEF2FF] border border-[#E1E7FF] text-[#6366F1] text-sm font-semibold px-4 py-1.5 rounded-full w-fit shadow-sm">
  
  {/* Glowing Dot Part */}
  <span className="relative flex h-2.5 w-2.5">
    {/* Baire halka wave ba pulse effect */}
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75"></span>
    {/* Main solid dot */}
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6366F1]"></span>
  </span>

  <span>New: AI-Powered Tools Available</span>
</div>


              {/* Main Heading: tracking-tight diye letter-gulo kache ana hoyeche */}
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#101727]">
                Supercharge Your
                <br />
                <span className="text-[#101727]">Digital Workflow</span>
              </h1>

              {/* Description: leading-relaxed diye line-er gap barano hoyeche */}
              <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today.
              </p>

              {/* Buttons section: Mobile-e jate niche niche ashe tai flex-wrap use kora */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white text-sm md:text-base px-6 md:px-8">
                  Explore Products
                </a>
                <a className="btn btn-outline border-zinc-300 hover:border-none hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-sm md:text-base px-6 md:px-8 flex items-center gap-2">
                  <IoPlay className="text-xl" /> Watch Demo
                </a>
              </div>
            </div>

            {/* Dan diker chobi (Banner Image) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Chobi-ta jate beshi boro na hoy tai max-h use kora hoyeche */}
                <img
                  className="relative h-auto max-h-[500px] w-full object-contain drop-shadow-2xl rounded-3xl"
                  src={banner}
                  alt="AI Models Banner"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
