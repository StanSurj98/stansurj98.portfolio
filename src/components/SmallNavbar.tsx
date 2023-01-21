import Logo from "./widgets/Logo";
import NavbarTextButtons from "./widgets/NavbarTextButtons";

import SocialsIcons from "./widgets/SocialsIcons";

const SmallNavbar = () => {
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
