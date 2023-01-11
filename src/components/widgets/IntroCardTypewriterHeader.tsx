import React from "react";
import TypewriterComponent from "typewriter-effect";

const IntroCardTypewriterHeader = () => {
  return (
    <span className="mb-8 font-mono text-3xl font-medium md:text-4xl">
      <TypewriterComponent
        options={{
          strings: [
            "Coffeeholic.",
            "Developer.",
            "Creative.",
            "Problem Solver.",
            "Nature Lover.",
            "Dependable.",
            "Traveller.",
          ],
          delay: "natural",
          deleteSpeed: "natural",
          // pauseFor: 2000,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default IntroCardTypewriterHeader;
