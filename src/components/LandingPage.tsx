import React from "react";
import IntroCard from "./IntroCard";

const LandingPage = () => {
  return (
    <section id="landingPage" className="relative flex h-screen w-screen flex-col justify-center bg-gradient-to-br from-azure to-cobalt lg:items-center border-2 border-blue-500">
      <IntroCard></IntroCard>
    </section>
  );
};

export default LandingPage;

// bg-gradient-to-br from-capri to-cobalt