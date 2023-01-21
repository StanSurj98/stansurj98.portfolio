import React from "react";
import logoImage from "../../assets/ss_logo_nobg2.png";

const Logo = () => {
  return (
    <a href="#landingPage" className="flex items-center">
      <img
        src={logoImage}
        alt="Personal Logo for StanSurj98"
        className="cursor-pointer w-14 lg:w-16 2xl:w-20"
      />
    </a>
  );
};

export default Logo;
