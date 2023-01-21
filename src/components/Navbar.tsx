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
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Logo />

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
        <div className="fixed top-0 z-50 mt-16 flex h-max w-full flex-col items-center justify-center gap-8 bg-white py-8">
          {navChildren}
          <SocialsIcons />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
