import React from "react";

const BannerCount = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white py-12 gap-8 space-y-5 md:space-y-0 container mx-auto">
        <div className="border-r border-white/40">
          <h1 className="text-3xl md:text-5xl font-bold">50K+</h1>
          <p className="text-balance ">Active Users</p>
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold">200K+</h1>
          <p className="text-balance ">Premium Tools</p>
        </div>

        <div className="border-l border-white/40">
          <h1 className="text-3xl md:text-5xl font-bold">4.9</h1>
          <p className="text-balance ">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCount;
