import React from "react";
import TypewriterComponent from "typewriter-effect";

const IntroCardTypewriterHeader = () => {
  return (
    <span className="mb-4 lg:mb-6 font-mono text-3xl font-medium lg:text-4xl">
      <TypewriterComponent
        options={{
          strings: [
            "Coffeeholic.",
            "Developer.",
            "Creative.",
            "Problem Solver.",
            "Anime Lover.",
            "Dependable.",
            "Traveller.",
            "Coachable"
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
