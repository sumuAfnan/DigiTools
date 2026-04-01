import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCardDetails = ({ model, Cards, setCards }) => {
  const { name, description, price, period, tag, features, icon } = model;

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed(true);

    const isAlreadySubscribed = Cards.find((card) => card.id === model.id);

    if (isAlreadySubscribed) {
      toast.warning(" You have already Sales done to this Cards!");
      return;
    }

    setCards([model, ...Cards]);
    toast.success(" Sales Done Successfully!");
  };

  return (
    <div>
      <div className=" p-8">
        <div
          className="relative w-full max-w-sm rounded-3xl 
        border border-gray-100 bg-white p-8 shadow-sm space-y-5 "
        >
          <div
            className={`absolute right-6 top-3 rounded-full  px-4 py-1 text-sm font-semibold  text-[#f3f7fa] 
            ${tag === "new" ? "bg-blue-500" : tag === "best seller" ? "bg-green-500" : "bg-purple-500"}`}
          >
            <p className="text-sm">{tag}</p>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-amber-200 rounded-full">
            <img src={icon} alt={name} className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#101727]">{name}</h2>
            <p className="text-base text-gray-400">{description}</p>
          </div>
          <div>
            <h6 className="text-2xl font-bold text-[#101727]">
              ${price}
              <span className="text-sm text-[#627382]">/{period}</span>
            </h6>
          </div>
          <div>
            {features.map((feature, i) => (
              <p
                key={i}
                className="text-base text-gray-400 flex items-center gap-3 "
              >
                <FaCheck className="text-green-400" /> {feature}
              </p>
            ))}
          </div>
          <div>
            <button
              onClick={handleSubscription}
              className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-sm md:text-base px-4 md:px-6"
            >
              {isSubscribed ? "Sales Done" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
