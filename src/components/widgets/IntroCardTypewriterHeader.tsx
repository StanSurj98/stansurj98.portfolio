import React from "react";
import TypewriterComponent from "typewriter-effect";

const IntroCardTypewriterHeader = () => {
  return (
    <span className="font-mono text-2xl font-medium mx-8 mb-8">
      <TypewriterComponent
        options={{
          strings: [
            "Coffeeholic",
            "Developer",
            "Creative",
            "Problem Solver",
            "Nature Lover",
            "Dependable",
            "Traveller",
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
