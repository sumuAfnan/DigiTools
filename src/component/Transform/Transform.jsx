import React from "react";

const Transform = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="container mx-auto py-20 ">
          <div className="text-center space-y-5">
            <h2 className="text-2xl md:text-5xl font-bold text-white ">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-balance text-white/90 ">
              Join thousands of professionals who are already using Digitals to
              work smarter.Start your free trial today.
            </p>
          </div>
          <div className="flex justify-center gap-5 py-8">
            <button
              className="btn bg-white text-linear-to-r from-[#4F39F6] to-[#9514FA]
               rounded-4xl text-purple-600 px-5 py-3
                hover:bg-yellow-300 hover:text-white transition duration-300"
            >
              Explore Products
            </button>
            <button
              className="btn btn-neutral btn-outline hover:border-none  hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white border-white/80
                            text-sm md:text-base px-4 md:px-6"
            >
              View Pricing
            </button>
          </div>
          <p className="text-cyan-100 text-center px-8">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transform;
