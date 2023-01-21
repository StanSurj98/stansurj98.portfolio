import React from "react";
import IntroCard from "./IntroCard";

const LandingPage = () => {
  return (
    <section
      id="landingPage"
      className="relative mt-16 lg:mt-0 flex h-max w-screen flex-col justify-center lg:bg-gradient-to-br from-azure to-cobalt lg:h-screen lg:items-center"
    >
      <IntroCard></IntroCard>
    </section>
  );
};

export default LandingPage;

