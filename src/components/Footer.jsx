import React from "react";
import { FooterRoot } from "./Styled";
import { ReactComponent as Git } from "./../svgs/footergit.svg";
import { ReactComponent as LinkedIn } from "./../svgs/footerlinkedin.svg";

const Footer = () => {
  return (
    <FooterRoot className="text-center max-w-xs gap-2 mx-auto items-center font-mono py-4 flex flex-col">
      <div className="text-sm text-slate-300">Created by Nikhil Joshi</div>
      <div className="flex gap-4 fill-slate-100">
        <a href="https://github.com/nikhilakjoshi" rel="noopener noreferrer" target="_blank">
          <Git width={24} height={24} className="fill-slate-300" />
        </a>
        <a href="https://in.linkedin.com/in/nikhil-joshi-36784a5b" rel="noopener noreferrer" target="_blank">
          <LinkedIn width={24} height={24} className="fill-slate-300" />
        </a>
      </div>
      <div className="fixed top-3/4 left-4 hidden xl:block">
        <div className="relative flex flex-col gap-4 before:h-16 before:w-[1px] before:absolute before:bg-slate-300 before:left-1/2 before:bottom-[150%] after:h-16 after:w-[1px] after:absolute after:bg-slate-300 after:left-1/2 after:top-[150%]">
          <a href="https://github.com/nikhilakjoshi" rel="noopener noreferrer" target="_blank">
            <Git width={24} height={24} className="fill-slate-300" />
          </a>
          <a href="https://in.linkedin.com/in/nikhil-joshi-36784a5b" rel="noopener noreferrer" target="_blank">
            <LinkedIn width={24} height={24} className="fill-slate-300" />
          </a>
        </div>
      </div>
    </FooterRoot>
  );
};

export default Footer;
