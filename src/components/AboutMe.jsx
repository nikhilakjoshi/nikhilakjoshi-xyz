import React from "react";
import { AboutMeSection } from "./Styled";
import HighLightSpan from "./commons/HighLightSpan";
import profPic from "./../images/profpic.jpg";

const AboutMe = () => {
  return (
    <AboutMeSection className="mx-auto container px-6 xl:px-60 py-36" id="about">
      <div className="name text-3xl font-bold mt-8 mb-8 aboutmetitle">About me</div>
      <div className="flex flex-col xl:flex-row gap-16 items-center">
        <div className="textsection text-sm lg:basis-3/5 basis-full text font-mono leading-6">
          <p className="mb-4">
            <span className="text-slate-400">
              Hello, I'm Nikhil Joshi. I have more than <HighLightSpan>8 years</HighLightSpan> of experience in the tech
              industry across multiple domains and various products.
            </span>
          </p>
          <p>
            <span className="text-slate-400">
              However, over the past 5 years I have completely been into web development. I started my journey with{" "}
              <HighLightSpan>VueJS</HighLightSpan>, <HighLightSpan>NodeJS</HighLightSpan> and then there was no stopping
              me.
            </span>
          </p>
          <p className="mb-4">
            <span className="text-slate-400">
              Over the years, I have worked on Projects which involved <HighLightSpan>ReactJS</HighLightSpan>,{" "}
              <HighLightSpan>JavaSpringBoot</HighLightSpan>, <HighLightSpan>NodeJS</HighLightSpan> using tools such as{" "}
              <HighLightSpan>styled-components</HighLightSpan>, <HighLightSpan>Bootstrap</HighLightSpan>,{" "}
              <HighLightSpan>Tailwindcss</HighLightSpan>, <HighLightSpan>Material UI</HighLightSpan> and waiting to work
              on and learn more interesting things
            </span>
          </p>
          <p className="mb-4">
            <span className="text-slate-400">
              On the backend bit of things, I have worked on building RESTful APIs usign{" "}
              <HighLightSpan>NodeJS</HighLightSpan> and more recently <HighLightSpan>JavaSpringBoot</HighLightSpan>.
            </span>
          </p>
          <p>
            <span className="text-slate-400">Here's a list of some of the techologies I have worked on</span>
            <ul className="text-slate-400 skilllist grid grid-cols-2 mt-2">
              <li>Vanilla JS</li>
              <li>ReactJS</li>
              <li>VueJS</li>
              <li>NodeJS</li>
              <li>RESTful APIs</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Git</li>
              <li>Java Sprintboot</li>
              <li>MVC Architecture</li>
            </ul>
          </p>
        </div>
        <div className="imgSection w-80 h-80 relative z-0">
          <img className="rounded-md w-full h-full" src={profPic} alt="" />
          <div className="absolute w-full h-full bg-[#73e6e0] inset-0 rounded-md opacity-30 hover:opacity-0 transition-opacity origin-center"></div>
          <div className="absolute w-full h-full border-2 rounded-md border-[#73e6e0] top-4 left-4 -z-10 bg-[#73e6e0] bg-opacity-10"></div>
        </div>
      </div>
    </AboutMeSection>
  );
};

export default AboutMe;
