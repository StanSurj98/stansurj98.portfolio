import React from "react";
import IntroCard from "./IntroCard";

const LandingPage = () => {
  return (
    <section
      id="landingPage"
      className="relative flex h-max w-screen flex-col justify-center lg:bg-gradient-to-br from-azure to-cobalt lg:h-screen lg:items-center"
    >
      <IntroCard></IntroCard>
    </section>
  );
};

export default LandingPage;

// bg-gradient-to-br from-capri to-cobalt
