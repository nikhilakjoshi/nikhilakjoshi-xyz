import React from "react";

const OutLineButtonComponent = ({ text }) => (
  <a
    href="/#myprojects"
    className="inline-block checkoutProj px-6 py-4 rounded-sm font-mono text-sm mt-16 hover:bg-opacity-20 hover:bg-[#b8b372] transition-colors "
  >
    {text}
  </a>
);

export default OutLineButtonComponent;
