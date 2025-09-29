import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  //   console.log(pricing);
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col border bg-cyan-200 rounded-2xl p-4">
      {/* Card head  */}
      <div>
        <h1 className="text-4xl font-bold"> {name} </h1>
        <h4 className="text-2xl font-bold"> {price} </h4>
      </div>
      {/* Card body */}
      <div className=" bg-amber-200 p-4 rounded-2xl mt-5 flex-1">
        <p className="font-semibold">{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
