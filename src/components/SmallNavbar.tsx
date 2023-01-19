import NavbarTextButtons from "./widgets/NavbarTextButtons";
import Logo from "../assets/ss_logo_nobg2.png";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SmallNavbar = () => {
  const navCategories = [
    {
      title: "Resumé",
      link: "https://resume.creddle.io/resume/fckk968fx6h",
    },
    { title: "Work", link: "#work" },
    // { title: "Contact", link: "#contact" },
  ];

  const navChildren = navCategories.map(({ title, link }, index) => {
    return <NavbarTextButtons title={title} key={index} link={link} />;
  });

  return (
    <nav className="hidden lg:flex lg:h-16 lg:w-full lg:items-center lg:justify-between">
      <a href="#landingPage" className="flex items-center">
        <img
          src={Logo}
          alt="Personal Logo for StanSurj98"
          className="cursor-pointer lg:h-12 2xl:h-14"
        />
      </a>
      <div className="flex items-center">
        {navChildren}
        <div className="ml-4 flex">
          <IconContext.Provider
            value={{
              className:
                "ml-2 text-2xl cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out hover:text-azure",
            }}
          >
            <a href="https://github.com/StanSurj98" target={"_blank"}>
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-surjanto/"
              target={"_blank"}
            >
              <FaLinkedin />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
