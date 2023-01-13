import React from "react";
import IntroCard from "./IntroCard";

const LandingPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-gradient-to-br from-azure to-cobalt lg:items-center">
      <IntroCard></IntroCard>
    </div>
  );
};

export default LandingPage;

// bg-gradient-to-br from-capri to-cobalt