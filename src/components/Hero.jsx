import React from "react";
import { HeroSection } from "./Styled";
import OutLineButtonComponent from "./commons/OutLineButtonComponent";
import HighLightSpan from "./commons/HighLightSpan";

const Hero = () => {
  return (
    <HeroSection className="mx-auto container px-6 xl:px-60 pb-36 pt-72">
      <div className="block font-mono opacity-70">Hi, my name is</div>
      <div className="name xl:text-6xl lg:text-5xl text-4xl font-bold mt-8 mb-4">Nikhil Joshi.</div>
      <div className="name xl:text-5xl text-4xl font-bold mb-6 text-slate-400">I love building tools on the web</div>
      <p className="lg:w-4/5 text font-mono leading-6 text-slate-400">
        <span className="">
          I'm a full stack engineer, with experience in building web apps that solve unique business requirements and
          help deliver value to a product that pushes a business to its{" "}
        </span>
        <HighLightSpan>heights</HighLightSpan>
      </p>
      <OutLineButtonComponent text="Checkout my projects" />
    </HeroSection>
  );
};

export default Hero;
