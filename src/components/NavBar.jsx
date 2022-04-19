import React from "react";
import styledComponents from "styled-components";
import { ReactComponent as Logo } from "./../svgs/logo.svg";

const NavBarRoot = styledComponents.nav`
  background: ${(p) => p.theme.dark};
`;

const linkData = [
  {
    linkText: "About",
    path: "/#about",
  },
  {
    linkText: "Work",
    path: "/#mywork",
  },
  {
    linkText: "Projects",
    path: "/#myprojects",
  },
];

const NavBar = () => {
  return (
    <NavBarRoot className="mx-auto p-6 shadow-lg fixed flex items-center top-0 left-0 w-full z-10">
      <div className="logoContainer">
        <a href="/">
          <Logo width={48} height={48} />
        </a>
      </div>
      <ul className="ml-auto flex gap-8 font-mono">
        {linkData.map((link) => (
          <li className="hover:underline hover:text-[#ffef77]">
            <a href={link.path}>{link.linkText}</a>
          </li>
        ))}
      </ul>
    </NavBarRoot>
  );
};

export default NavBar;
