import React from "react";

const StepsCardDetails = ({ item }) => {
  const { img, title, description } = item;

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="relative bg-white rounded-2xl shadow-md p-8 w-80 text-center hover:shadow-lg transition duration-300 ease-in-out ">
          {/* Step Number */}
          <div className="absolute top-4 right-4 bg-linear-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full">
            {item.id}
          </div>

          {/* Icon Circle */}
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
              <img src={img} alt="" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsCardDetails;
