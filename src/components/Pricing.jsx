import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

export const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={225}
            height={225}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img className="w-full" width={950} height={400} src={stars} alt="star" />
          </div>
        </div>
        <Heading tag="Get started with Brainwave" title="Pay once, use forever" className="flex items-center justify-center" />
        <div className="relative">
         <PricingList />
         <LeftLine />
         <RightLine />
        </div>
      </div>
    </Section>
  );
};
export default Pricing;
