import { useState } from "react";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import Logo from "./widgets/Logo";
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialsIcons from "./widgets/SocialsIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navCategories = [
    {
      title: "Resumé",
      link: "https://resume.creddle.io/resume/fckk968fx6h",
    },
    { title: "Work", link: "#work" },
    { title: "Contact", link: "#contact" },
  ];

  const navChildren = navCategories.map(({ title, link }, index) => {
    return <NavbarTextButtons title={title} key={index} link={link} />;
  });

  return (
    <>
      {/* opaque underlayer to navbar */}
      {/* <div className="bg-gradient-to-br from-darksteel to-rich-black opacity-90 fixed top-0 z-40 h-16 w-full"></div> */}

      <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white lg:bg-transparent">
        {/* desktop navbar visible on large screens only */}
        {/* <div className="mx-auto hidden w-[90%] items-center justify-between lg:flex">
          <Logo alt={true} />
          <div className="hidden items-center justify-center gap-8 text-white lg:flex">
            {navChildren}
            <SocialsIcons />
          </div>
        </div> */}

        {/* mobile navbar visible on small screens only */}
        <div className="mx-auto flex w-[90%] items-center justify-between lg:hidden">
          <Logo />
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconContext.Provider
              value={{
                className:
                  "text-2xl cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out hover:text-azure",
              }}
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </IconContext.Provider>
          </button>
        </div>

        {isOpen && (
          <div className="fixed top-0 z-50 mt-16 flex h-max w-full flex-col items-center justify-center gap-8 bg-white py-8 drop-shadow-xl">
            {navChildren}
            <SocialsIcons />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
