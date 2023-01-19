import React from "react";
import { IconContext } from "react-icons";
import { SiGmail } from "react-icons/si";

const ContactBlurb = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:w-1/2">
      <h1 className="fontSize-smallHeader mb-4 w-full font-robotoCondensed uppercase text-azure">
        CONTACT
      </h1>
      <h1 className="fontSize-smallHeader mb-12 w-full font-robotoCondensed text-white">
        Get In Touch!
      </h1>
      <p className="text-l mb-12 w-full text-left font-robotoCondensed font-light text-white lg:text-xl 2xl:text-2xl">
        Have ideas for your dream application?
        <br />
        Do you want to collaborate on a project together?
        <br />
        <br />
        Is there an opportunity at your super awesome workplace?
        <br />
        I am currently seeking permanent role opportunities!
        <br />
        <br />
        So please, say hello!
      </p>
      <div className="group flex w-full flex-row items-center justify-start text-white">
        <IconContext.Provider
          value={{
            className:
              "text-2xl cursor-pointer duration-200 ease-out group-hover:scale-110 group-hover:ease-out group-hover:text-azure",
          }}
        >
          <SiGmail />
          <p className="text-l ml-4 cursor-pointer font-robotoCondensed tracking-wide duration-200 ease-out group-hover:scale-105 group-hover:text-azure group-hover:ease-out lg:text-xl">
            <a href="mailto:stan.surjanto@gmail.com">stan.surjanto@gmail.com</a>
          </p>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ContactBlurb;
