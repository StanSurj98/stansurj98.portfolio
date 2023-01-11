import React from "react";
import AboutBlurb from "./widgets/AboutBlurb";
import IntroCardTypewriterHeader from "./widgets/IntroCardTypewriterHeader";
import Nameplate from "./widgets/Nameplate";

const IntroCard = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:w-4/5 md:h-[90%] h-screen bg-white md:drop-shadow-custom-large md:rounded-md">
      <div className="h-2/5 md:h-full md:w-1/2 md:rounded-tr-md md:rounded-br-md bg-[#0F1922] text-white">
        This should be an image
      </div>
      <div className="flex flex-col items-start">
        <Nameplate />
        <IntroCardTypewriterHeader />
        <AboutBlurb />
      </div>
    </div>
  );
};

export default IntroCard;
