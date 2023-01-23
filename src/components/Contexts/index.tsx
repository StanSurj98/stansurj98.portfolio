import React from "react";

export const navCategories = [
  {
    title: "Resumé",
    link: "https://resume.creddle.io/resume/fckk968fx6h",
  },
  { title: "Work", link: "#work" },
  { title: "Contact", link: "#contact" },
];

export const NavMenuContext = React.createContext(navCategories)