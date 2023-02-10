import React from "react";

// If ever need to add menu items to all navbars, add to this array here
export const navCategories = [
  {
    title: "Resumé",
    link: "https://resume.creddle.io/resume/fckk968fx6h",
  },
  { title: "Work", link: "#work" },
  { title: "Contact", link: "#contact" },
];

export const NavMenuContext = React.createContext(navCategories)