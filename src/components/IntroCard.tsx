import React from "react";
import SmallNavbar from "./SmallNavbar";
import AboutBlurb from "./widgets/AboutBlurb";
import IntroCardTypewriterHeader from "./widgets/IntroCardTypewriterHeader";
import Nameplate from "./widgets/Nameplate";

const IntroCard = () => {
  return (
    <div className="flex h-full w-full flex-col lg:h-[90%] lg:w-4/5 lg:flex-row-reverse lg:justify-between lg:drop-shadow-custom-large">
      <div className="h-2/5 bg-[#0F1922] text-white lg:h-full lg:w-1/2 lg:rounded-r-md">
        This should be an image
      </div>
      <div className="flex flex-col items-start bg-white px-8 lg:h-full lg:w-1/2 lg:justify-start lg:rounded-l-md lg:px-16">
        <SmallNavbar />
        <Nameplate />
        <h1 className="my-2 font-robotoCondensed text-xl font-bold text-azure lg:mb-4 lg:text-2xl 2xl:mb-6">
          ABOUT
        </h1>
        <IntroCardTypewriterHeader />
        <AboutBlurb />
      </div>
    </div>
  );
};

export default IntroCard;
