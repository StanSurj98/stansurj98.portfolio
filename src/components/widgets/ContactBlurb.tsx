import React from "react";
import { IconContext } from "react-icons";
import { SiGmail } from "react-icons/si";

const ContactBlurb = () => {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center p-28 border-2 border-red-200">
      <h1 className="w-full font-robotoCondensed text-2xl font-normal text-capri">
        CONTACT
      </h1>
      <h1 className="my-7 w-full font-robotoCondensed text-5xl font-bold text-white">
        Get In Touch
      </h1>
      <p className="mb-3 w-full font-robotoCondensed text-xl font-light text-white">
        Have ideas for your dream application?
        <br />
        Do you want to collaborate on a project together?
        <br />
        <br />
        Is there an opening at your super awesome workplace?
        <br />
        I am currently seeking permanent role opportunities!
        <br />
        <br />
        So please, say hello!
      </p>
      {/* on hover, make gmail icon to original color and email string to blue or something */}
      <div className="flex w-full flex-row items-end justify-start font-robotoCondensed text-xl font-normal text-white grayscale saturate-0 hover:text-capri hover:grayscale-0 hover:saturate-100 ">
        <IconContext.Provider
          value={{
            className:
              "ml-2 text-2xl cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out hover:text-azure",
          }}
        >
          <img alt="gmail-logo" src={SiGmail} className="h-7 w-7 " />
        </IconContext.Provider>
        <p className="ml-3">stan.surjanto@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactBlurb