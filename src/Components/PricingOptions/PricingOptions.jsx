import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricingCard/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const PricingData = use(pricingPromise);
  //   console.log(PricingData);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center mb-5">
        Get our membership
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {PricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {PricingData.map((pricing) => (
          <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
