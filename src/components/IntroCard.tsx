import React from "react";
import AboutBlurb from "./widgets/AboutBlurb";
import IntroCardTypewriterHeader from "./widgets/IntroCardTypewriterHeader";
import Nameplate from "./widgets/Nameplate";

const IntroCard = () => {
  return (
    <div className="flex h-full w-full flex-col md:h-[90%] md:w-4/5 md:flex-row-reverse md:drop-shadow-custom-large">
      <div className="h-2/5 bg-[#0F1922] text-white md:h-full md:w-1/2 md:rounded-r-md">
        This should be an image
      </div>
      <div className="flex flex-col items-start bg-white px-8 md:w-1/2 md:justify-center md:rounded-l-md md:px-20">
        <Nameplate />
        <IntroCardTypewriterHeader />
        <AboutBlurb />
      </div>
    </div>
  );
};

export default IntroCard;