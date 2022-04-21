import React, { useState } from "react";
import HighLightSpan from "./commons/HighLightSpan";
import { CompLi, CompRoleDesc, MyWorkSection } from "./Styled";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const CompList = ["Maveric", "Others"];

const MyWork = () => {
  const [selectedComp, setSelectedComp] = useState("Maveric");

  return (
    <MyWorkSection className="mx-auto container px-6 xl:px-60 py-36" id="mywork">
      <div className="name text-3xl font-bold mt-8 mb-8 myworktitle ml-40">My Work</div>
      <div className="contentContainer items-start gap-12 flex-col xl:flex-row-reverse flex">
        <nav className="worklist w-full xl:w-auto overflow-x-scroll xl:overflow-x-auto">
          <ul className="font-mono flex xl:block">
            {CompList.map((comp) => (
              <CompLi
                selectedComp={selectedComp}
                className="px-6 py-3 hover:bg-[#ffef77] whitespace-nowrap hover:bg-opacity-20 cursor-pointer transition font-bold text-sm"
                key={comp}
                comp={comp}
                onClick={() => setSelectedComp(comp)}
              >
                {comp}
              </CompLi>
            ))}
          </ul>
        </nav>
        <div className="selected xl:basis-3/5 grow xl:h-[30rem]">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={selectedComp}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              timeout={100}
              classNames="fade"
            >
              {selectedComp == "Maveric" ? (
                <MavericBanking />
              ) : selectedComp == "Maveric (TFO)" ? (
                <MavericWealth />
              ) : selectedComp == "Maveric (Internal)" ? (
                <MavericTestTool />
              ) : (
                <Others />
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </MyWorkSection>
  );
};

const MavericBanking = () => (
  <CompRoleDesc className="maveric">
    <h4 className="text-xl text-display mb-2 font-bold">
      Full Stack Engineer <HighLightSpan>@ Maveric Systems</HighLightSpan>
    </h4>
    <div className="font-mono text-slate-400">
      <p className="mb-4">Sept 2019 - Present</p>
      <ul className="descList text-sm">
        <li>
          Provide high fidelity mockups, wireframes and prototypes to business stakeholders and UI/UX teams and
          collaborate to finalize the best approach for deisgn and implementation
        </li>
        <li>
          Collaborate with client's in-house UI/UX team to understand the design principles used within the company
          branding
        </li>
        <li>Handle scrum activities during release cycles</li>
        <li>Prepare low level how to use documents which help business users to use the built tool to its potential</li>
        <li>Brainstorming sessions with the UI/UX team</li>
        <li>Building UI components and dashboards.</li>
        <li>App Integration with AWS Cognito & Azure AD. AWS Cognito POC and configuration</li>
        <li>Extract iOS artefacts and upload to test flight</li>
        <li>Designing, Data Modelling and Feature Development</li>
        <li>Building UI components and dashboards.</li>
        <li>Dockerizing the frontend and backend application and deployment into a linux system</li>
        <li>Presenting progress and going through multiple iterations of delivery and enhancement</li>
      </ul>
      <div className="techwrapper my-6">
        <h6 className="mb-2">Tech stack used:</h6>
        <div className="techstack grid grid-cols-3 text-sm opacity-80">
          <HighLightSpan>ReactJS</HighLightSpan>
          <HighLightSpan>styled-components</HighLightSpan>
          <HighLightSpan>Java Springboot</HighLightSpan>
          <HighLightSpan>NodeJS</HighLightSpan>
          <HighLightSpan>groovy script</HighLightSpan>
        </div>
      </div>
    </div>
  </CompRoleDesc>
);

const MavericWealth = () => (
  <CompRoleDesc className="maveric">
    <h4 className="text-xl text-display mb-2 font-bold">
      Full Stack Engineer <HighLightSpan>@ The Family Office</HighLightSpan>
    </h4>
    <div className="font-mono text-slate-400">
      <p className="mb-4">Aug 2020 - Dec 2020</p>
      <ul className="descList text-sm">
        <li>Brainstorming sessions with the UI/UX team</li>
        <li>Building UI components and dashboards.</li>
        <li>App Integration with AWS Cognito & Azure AD. AWS Cognito POC and configuration</li>
        <li>Extract iOS artefacts and upload to test flight</li>
      </ul>
      <div className="techwrapper my-6">
        <h6 className="mb-2">Tech stack used:</h6>
        <div className="techstack grid grid-cols-3 text-sm opacity-80">
          <HighLightSpan>ReactJS</HighLightSpan>
          <HighLightSpan>Ionic React</HighLightSpan>
          <HighLightSpan>Capacitor</HighLightSpan>
          <HighLightSpan>NodeJS</HighLightSpan>
        </div>
      </div>
    </div>
  </CompRoleDesc>
);

const MavericTestTool = () => (
  <CompRoleDesc className="maveric">
    <h4 className="text-xl text-display mb-2 font-bold">
      Full Stack Engineer <HighLightSpan>@ Internal Projects</HighLightSpan>
    </h4>
    <div className="font-mono text-slate-400">
      <p className="mb-4">Sept 2019 - Aug 2020</p>
      <ul className="descList text-sm">
        <li>Designing, Data Modelling and Feature Development</li>
        <li>Building UI components and dashboards.</li>
        <li>Dockerizing the frontend and backend application and deployment into a linux system</li>
        <li>Presenting progress and going through multiple iterations of delivery and enhancement</li>
      </ul>
      <div className="techwrapper my-6">
        <h6 className="mb-2">Tech stack used:</h6>
        <div className="techstack grid grid-cols-3 text-sm opacity-80">
          <HighLightSpan>VueJS</HighLightSpan>
          <HighLightSpan>NodeJS</HighLightSpan>
          <HighLightSpan>Docker</HighLightSpan>
        </div>
      </div>
    </div>
  </CompRoleDesc>
);

const Others = () => (
  <CompRoleDesc className="accenture">
    <h4 className="text-xl text-display mb-2 font-bold">
      Systems Engineer <HighLightSpan>@ Accenture Solutions, Atos India & IBM India</HighLightSpan>
    </h4>
    <div className="font-mono text-slate-400">
      <p className="mb-4">Sept 2014 - Aug 2017</p>
      <ul className="descList text-sm">
        <li>Siebel consultant primarily in the the telecom and the consumer goods sector</li>
        <li>A clear understanding of Data structures and algorithms</li>
        <li>Actively involved in feature development, requirement grooming sessions</li>
        <li>
          Understood the core functional aspects of the tool. Involved in multiple trainings to client business users
        </li>
        <li>
          Involved in presenting feature enhancement, bug fixes during CAB (Change Acceptance Board) meetings and
          helping stakeholders understand the technical changes and functional impacts
        </li>
        <li>
          Was a part of few major implementations such as National MNP, Onboarding customers through integrations with
          the UIDAI systems
        </li>
      </ul>
      <div className="techwrapper my-6">
        <h6 className="mb-2">Tech stack used:</h6>
        <div className="techstack grid grid-cols-3 text-sm opacity-80">
          <HighLightSpan>Configuration</HighLightSpan>
          <HighLightSpan>OpenUI</HighLightSpan>
          <HighLightSpan>eScript</HighLightSpan>
          <HighLightSpan>EAI</HighLightSpan>
          <HighLightSpan>Order Management</HighLightSpan>
          <HighLightSpan>Docker</HighLightSpan>
        </div>
      </div>
    </div>
  </CompRoleDesc>
);
export default MyWork;
