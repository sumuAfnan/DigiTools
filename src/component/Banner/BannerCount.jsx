import React from "react";

const BannerCount = () => {
  return (
    // Background gradient pura screen jure thakbe
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      
      {/* Container diye content majkhane ana hoyeche ar px-4/md:px-10 diye side gap dewa hoyeche */}
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Grid layout: Mobile-e 1 column ar Tablet/Desktop-e 3 column hobe */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white py-12 gap-8 items-center">
          
          {/* First Item: Border-r sudhu boro screen-e (md:) dekhabe */}
          <div className="md:border-r border-white/30 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">50K+</h1>
            <p className="text-lg opacity-90">Active Users</p>
          </div>

          {/* Middle Item: Ekhane border nei, etai center focus */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">200K+</h1>
            <p className="text-lg opacity-90">Premium Tools</p>
          </div>

          {/* Last Item: Border-l sudhu boro screen-e (md:) dekhabe */}
          <div className="md:border-l border-white/30 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">4.9</h1>
            <p className="text-lg opacity-90">User Rating</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BannerCount;
