import { useState, useContext } from "react";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import Logo from "./widgets/Logo";
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialsIcons from "./widgets/SocialsIcons";
import { NavMenuContext } from "./Contexts";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMenuContext = useContext(NavMenuContext)

  const navChildren = navMenuContext.map(({ title, link }, index) => {
    return <NavbarTextButtons title={title} key={index} link={link} />;
  });

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white lg:hidden">

      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Logo alt={false}/>
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
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

      {/* nav menu box */}
      {isOpen && (
        <div className="fixed top-0 z-50 mt-16 flex h-max w-full flex-col items-center justify-center gap-8 bg-white py-8 drop-shadow-xl">
          {navChildren}
          <SocialsIcons />
        </div>
      )}

    </nav>
  );
};

export default MobileNavbar;
