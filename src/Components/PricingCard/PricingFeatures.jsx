import { CircleCheckBig } from "lucide-react";

const PricingFeatures = ({ feature }) => {
  return (
    <>
      <p className="flex mt-4">
        <CircleCheckBig className="mr-2"></CircleCheckBig> {feature}
      </p>
    </>
  );
};

export default PricingFeatures;
