import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import Logo from "../assets/ss_logo_nobg2.png";

const SmallNavbar = () => {
  const navCategories = ["Resumé", "Work", "Contact"];
  const navChildren = navCategories.map((title) => {
    return <NavbarTextButtons title={title} />;
  });

  return (
    <nav className="hidden lg:flex lg:h-16 lg:w-full lg:items-center lg:justify-between lg:py-14 2xl:py-16">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Personal Logo for StanSurj98"
          className="cursor-pointer lg:h-12 2xl:h-14"
        />
      </div>
      <div className="flex items-center">
        {navChildren}
        <div className="ml-2 flex">
          <FontAwesomeIcon
            className="ml-4 h-full cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out"
            icon={faGithub}
            // size={"xl"}
            fixedWidth
          />
          <FontAwesomeIcon
            className="ml-4 h-full cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out"
            icon={faLinkedin}
            // size={"xl"}
            fixedWidth
          />
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
