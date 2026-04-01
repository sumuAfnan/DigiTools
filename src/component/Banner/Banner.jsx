import React from "react";
import banner from "../../assets/products/banner.png";
import { IoPlay } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="relative min-h-162.5 flex items-center overflow-hidden py-10 px-5">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 ">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#E1E7FF] text- text-sm font-medium px-5 py-2 rounded-full">
              ✨ New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tighter text-[#101727]">
              Supercharge Your
              <br />
              <span className=" text-[#101727]">Digital Workflow</span>
            </h1>

            <p className="text-lg text-zinc-700 max-w-lg">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-sm md:text-base px-4 md:px-6">
                Explore Products
              </a>
              <a className="btn btn-neutral btn-outline hover:border-none  hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full
                text-sm md:text-base px-4 md:px-6">
                <IoPlay /> Watch Demo
              </a>
            </div>

            
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                src={banner}
                alt="AI Models Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
