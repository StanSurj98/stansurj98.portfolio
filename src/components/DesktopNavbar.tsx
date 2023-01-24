import React, { useContext, useEffect } from "react";
// ---- Components
import Logo from "./widgets/Logo";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import SocialsIcons from "./widgets/SocialsIcons";
// ---- Contexts
import { NavMenuContext } from "./Contexts";
// ---- Framer Motion
import { motion, useScroll, useAnimationControls } from "framer-motion";

const DesktopNavbar = () => {
  const navMenuContext = useContext(NavMenuContext);

  const navChildren = navMenuContext.map(({ title, link }, index) => {
    return <NavbarTextButtons title={title} key={index} link={link} />;
  });

  const { scrollY, scrollYProgress } = useScroll();

  // useEffect(() => {
  //   if (scrollY) {

  //   }
  // }, [scrollY, scrollYProgress])
  

  return (
    <motion.nav className="fixed inset-x-0 top-0 z-50 hidden h-16 bg-gradient-to-br from-darksteel to-rich-black lg:flex" initial={{opacity:"0"}}>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Logo alt={true} />
        <div className="flex items-center justify-center gap-8 text-white">
          {navChildren}
          <SocialsIcons />
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopNavbar;
