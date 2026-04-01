import React from "react";
import PricingCardDetails from "./PricingCardDetails";

const PricingCard = () => {

const pricingData= [
  {
    "id": 1,
    "title": "Basic",
    "tag": "",
    "description": "Good for beginners",
    "price": 0,
    "duration": "month",
    "features": [
      "Limited tools",
      "Basic templates",
      "Community support"
    ],
    "buttonText": "Get Started",
    "status": "free"
  },
  {
    "id": 2,
    "title": "Pro",
    "tag": "Most Popular",
    "description": "Best for professionals",
    "price": 29,
    "duration": "month",
    "features": [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    "buttonText": "Start Pro Trial",
    "status": "popular"
  },
  {
    "id": 3,
    "title": "Enterprise",
    "tag": "",
    "description": "For large teams",
    "price": 99,
    "duration": "month",
    "features": [
      "All Pro features",
      "Dedicated support",
      "Team collaboration",
      "Custom integrations"
    ],
    "buttonText": "Contact Sales",
    "status": "free"
  }
];


  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="text-center space-y-5 py-3">
          <h1 className="text-3xl md:text-5xl font-bold ">Simple, Transparent Pricing</h1>
          <p className="text-balance ">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 md:gap-2 py-5 ">
          {pricingData.map((item) => (
            <PricingCardDetails key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
