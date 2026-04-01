import React from "react";
import icon_1 from "../../assets/products/Icon-1.png";
import icon_2 from "../../assets/products/Icon-2.png";
import icon_3 from "../../assets/products/Icon-3.png";
import StepsCardDetails from "./StepsCardDetails";

const StepsCard = () => {
  const data = [
    {
      id: 1,
      img:  icon_1 ,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: 2,
      img:  icon_2 ,
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: 3,
      img: icon_3 ,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <div className="text-center space-y-5 py-3">
        <h1 className="text-3xl md:text-5xl font-bold ">Get Started in 3 Steps</h1>
        <p className="text-balance ">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 py-5 ">
        {data.map((item) => (
          <StepsCardDetails key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StepsCard;
