import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

const PricingCardDetails = ({ item }) => {
  const { title, description, price, duration, buttonText } = item;

  return (
    <div className="flex justify-center space-y-5">
      <div
        className={`w-80  relative rounded-2xl p-6 text-white 
            ${
              item.status === "free"
                ? "bg-[#F9FAFC] text-black"
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            }  shadow-lg hover:scale-105 transition duration-300 space-y-5`}
      >
        {/* Tag */}
        {item.tag ? (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2
           bg-yellow-300 text-black text-sm px-4 py-1 rounded-full font-semibold"
          >
            {item.tag}
          </div>
        ) : (
          " "
        )}
        {/* Title */}

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-base ">{description}</p>

          <div className="flex items-center ">
            <h5 className="text-3xl text-black font-bold">${price}</h5>
            <p className="text-gray-300">/{duration}</p>
          </div>
        </div>

        {/* features list */}
        <ul className="space-y-4 ">
          {item.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-900">
              <LuCircleCheckBig />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={`w-full ${
            item.status === "free"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-white text-black"
          } hover:bg-yellow-500 hover:text-white
          font-bold py-4 rounded-4xl 
         shadow-lg transition-colors duration-200 uppercase`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCardDetails;
