import React from "react";
import { ReactComponent as Logo } from "./../svgs/logo.svg";

const NavBar = () => {
  return (
    <nav className="mx-auto p-6">
      <div className="logoContainer">
        <Logo width={64} height={64} />
      </div>
    </nav>
  );
};

export default NavBar;
