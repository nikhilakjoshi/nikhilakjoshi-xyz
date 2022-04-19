import React from "react";
import { MyProjectsSection, FeaturedProjectRoot } from "./Styled";
import bbd from "./../images/bluebuckdesigns.png";
import brs from "./../images/bikerentalservices.png";
import das from "./../images/desireacservices.png";
import vsi from "./../images/vaccineslotsindia.png";
import smp from "./../images/scmarketplace.png";
import HighLightSpan from "./commons/HighLightSpan";
import { ReactComponent as GitIcon } from "./../svgs/git.svg";
import { ReactComponent as LinkIcon } from "./../svgs/link.svg";

const featureProjects = [
  {
    __id: 0,
    projectTitle: "SC Marketplace",
    projectDescription: [
      "Standard chartered bank's public facing site for developers and businesses to choose from a variety of the bank's open APIs. The sandbox feature of this webapp allows for easy and quick integration with external developers who want to try and consure SC's APIs.",
      "It features a first of its kind mashup feature along with most handy features in this category to ease a businesses testing and development lifecycle with respect to consuming bank APIs",
    ],
    tools: ["ReactJS", "styled-components", "create-react-app", "craco", "BitBucket", "Jenkins", "groovy lang", "JIRA"],
    image: smp,
    projectLink: "https://axess.sc.com/marketplace",
    // repoLink: "https://github.com/nikhilakjoshi/portfolio2",
  },
  {
    __id: 1,
    projectTitle: "Bluebuck Designs",
    projectDescription: [
      "This is my first attempt at a portfolio website. A site where people can contact me for website design, development etc.",
      "It has separate sections showcasing my abilities and the different projects that I have worked on.",
    ],
    tools: ["ReactJS", "styled-components", "Vite", "Vercel", "Github", "Framer Motion"],
    image: bbd,
    projectLink: "https://bluebuckdesigns.xyz",
    repoLink: "https://github.com/nikhilakjoshi/portfolio2",
  },
  {
    __id: 2,
    projectTitle: "Bike rental services",
    projectDescription: [
      "A mock mobile site for users to come over and book bikes for rent",
      "Bikes are categorised under various headers and top bikes are shown as a infinitely looped carousel",
    ],
    tools: ["ReactJS", "tailwindcss", "NextJS", "Vercel", "Github"],
    image: brs,
    projectLink: "https://bike-rental-zeta.vercel.app/",
    repoLink: "https://github.com/nikhilakjoshi/bikeRental",
  },
  {
    __id: 3,
    projectTitle: "Desire AC services",
    projectDescription: [
      "A mock website to showcase services provided by a Air conditioning service provider",
      "Built with both tailwind and styled-components provinding a complete control over the design system",
    ],
    tools: ["ReactJS", "tailwindcss", "NextJS", "Vercel", "Github", "styled-components"],
    image: das,
    projectLink: "https://desireacservices.vercel.app/",
    repoLink: "https://github.com/nikhilakjoshi/desireacservices",
  },
  {
    __id: 4,
    projectTitle: "Covid-19 Vaccine Slots India",
    projectDescription: [
      "A site built to have a quick glance at the Covid 19 vaccine slots making use of the Indian government's public COWIN apis. I built this initially only for my family and myself when searching via the Aarogyasetu app was a bit time consuming.",
      "But then I ended up spending a bit more time to make any location/ hospital conducting vaccine drives searchable.",
    ],
    tools: ["ReactJS", "tailwindcss", "NextJS", "Vercel", "Github"],
    image: vsi,
    projectLink: "https://vaccineslots1.vercel.app/",
    repoLink: "https://github.com/nikhilakjoshi/vaccineslots",
  },
];

const MyProjects = () => {
  return (
    <MyProjectsSection className="mx-auto container px-6 xl:px-60 py-36" id="myprojects">
      <div className="name text-3xl font-bold mt-8 mb-8 myprojtitle">My Projects</div>
      {featureProjects.map((proj, i) => (
        <FeaturedProject key={proj.__id} {...proj} index={i} />
      ))}
    </MyProjectsSection>
  );
};

const FeaturedProject = ({ projectTitle, projectLink, projectDescription, tools, image, repoLink, index }) => {
  return (
    <FeaturedProjectRoot className="mb-44 mt-24 grid grid-cols-12 items center gap-3" isOdd={index % 2 == 1}>
      <div
        className={
          index % 2 == 1
            ? "bg-[#092743] rounded-md p-4 bg-opacity-80 xl:bg-transparent col-start-1 col-end-[-1] xl:col-start-1 xl:col-end-8 text-left row-start-1 row-end-[-1] z-[1]"
            : "bg-[#092743] rounded-md p-4 bg-opacity-80 xl:bg-transparent col-start-1 col-end-[-1] xl:col-start-7 xl:col-end-[-1] text-left xl:text-right row-start-1 row-end-[-1] z-[1]"
        }
      >
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
          <h3 className="text-2xl font-bold mb-4 text-[#ffef77] xl:text-slate-100 hover:text-[#ffef77]">
            {projectTitle}
          </h3>
        </a>
        <div className="desc xl:bg-[#092743] shadow-xl xl:p-6 text-sm rounded-md">
          {projectDescription.map((des, i) => (
            <p className="mb-2 last:mb-0" key={i}>
              {des}
            </p>
          ))}
          <div className={`w-1/2 ${index % 2 == 0 && "ml-auto"} border-b my-6 border-slate-600`}></div>
          <div className="tools gap-1 grid grid-cols-3 ml-auto text-left text-[11px] font-mono">
            {tools.map((tool, i) => (
              <HighLightSpan key={i}>{tool}</HighLightSpan>
            ))}
          </div>
        </div>
        <div className="links flex gap-6 mt-6 items-center">
          <div className={index % 2 == 0 ? "ml-auto flex gap-6 items-center" : "flex gap-6 items-center"}>
            {repoLink && (
              <a href={repoLink} rel="noopener noreferrer" target="_blank">
                <GitIcon width={22} height={22} className="fill-gray-50 hover:fill-[#ffef77]" />
              </a>
            )}
            <a href={projectLink} rel="noopener noreferrer" target="_blank">
              <LinkIcon width={22} height={22} className="fill-gray-50 hover:fill-[#ffef77]" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          index % 2 == 1
            ? "col-start-1 col-end-[-1] relative h-full xl:col-start-6 xl:col-end-[-1] row-start-1 row-end-[-1]"
            : "col-start-1 col-end-[-1] relative h-full xl:col-start-1 xl:col-end-8 row-start-1 row-end-[-1]"
        }
      >
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
          <img src={image} alt="" className="object-cover rounded-md h-full w-full border border-[#73e6e0]" />
          <div className="absolute w-full h-full bg-[#73e6e0] inset-0 rounded-md opacity-30 hover:opacity-0 transition-opacity origin-center"></div>
          <div className="absolute w-full h-full border-2 rounded-md border-[#73e6e0] top-4 left-4 -z-10 bg-[#73e6e0] bg-opacity-10"></div>
        </a>
      </div>
    </FeaturedProjectRoot>
  );
};

export default MyProjects;
