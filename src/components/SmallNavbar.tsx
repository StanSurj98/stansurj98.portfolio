import Logo from "./widgets/Logo";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import SocialsIcons from "./widgets/SocialsIcons";
import { NavMenuContext } from "./Contexts";
import { useContext } from "react";

const SmallNavbar = () => {
  const navMenuContext = useContext(NavMenuContext)

  const navChildren = navMenuContext.map(({ title, link }, index) => {
    return <NavbarTextButtons title={title} key={index} link={link} />;
  });

  return (
    <nav className="hidden lg:flex lg:h-16 lg:w-full lg:items-center lg:justify-between">
      <Logo />
      <div className="flex items-center gap-6">
        {navChildren}
        <SocialsIcons />
      </div>
    </nav>
  );
};

export default SmallNavbar;
