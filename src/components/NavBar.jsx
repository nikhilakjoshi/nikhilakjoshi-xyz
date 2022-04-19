import React, { useState } from "react";
import styledComponents from "styled-components";
import { ReactComponent as Logo } from "./../svgs/logo.svg";
import { CSSTransition } from "react-transition-group";

const NavBarRoot = styledComponents.nav`
  background: ${(p) => p.theme.dark};
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 100ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
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

const linkDataSmall = [
  {
    linkText: "Home",
    path: "/",
  },
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavBarRoot className="mx-auto p-6 shadow-lg fixed flex items-center top-0 left-0 w-full z-10">
      <div className="logoContainer">
        <a href="/">
          <Logo width={48} height={48} />
        </a>
      </div>
      <ul className="ml-auto hidden xl:flex gap-8 font-mono">
        {linkData.map((link) => (
          <li className="hover:underline hover:text-[#ffef77]">
            <a href={link.path}>{link.linkText}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setShowMenu(true)}
        className="bars ml-auto xl:hidden block h-[2px] w-6 relative after:absolute after:h-[2px] after:w-4 after:top-2 bg-slate-50 after:bg-slate-50 before:absolute before:h-[2px] before:w-4 before:-top-2 before:bg-slate-50"
      ></div>
      <CSSTransition in={showMenu} timeout={100} unmountOnExit classNames="fade">
        <div className="fixed grid place-items-center inset-0 bg-[#092743]">
          <div onClick={() => setShowMenu(false)} className="absolute w-6 h-6 right-4 top-4 grid place-items-center">
            <div className="closeMenu h-[2px] w-6 rotate-45 relative after:absolute after:h-[2px] after:w-6 after:rotate-90 bg-slate-50 after:bg-slate-50"></div>
          </div>
          <ul className="gap-16 flex flex-col list-decimal font-mono">
            {linkDataSmall.map((link) => (
              <li className="hover:underline hover:text-[#ffef77]">
                <a onClick={() => setShowMenu(false)} href={link.path}>
                  {link.linkText}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </NavBarRoot>
  );
};

export default NavBar;
