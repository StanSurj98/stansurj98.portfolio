import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTextButtons from "./widgets/NavbarTextButtons";
import Logo from "../assets/ss_logo_nobg2.png";

const SmallNavbar = () => {
  return (
    <nav className="hidden lg:flex lg:h-16 lg:w-full lg:items-center lg:justify-between lg:py-14 2xl:py-16">
      <img
        src={Logo}
        alt="Personal Logo for StanSurj98"
        className="lg:h-12 2xl:h-14"
      />
      <span className="flex">
        {/* turn to <a> later to respective destinations */}
        <NavbarTextButtons title={"Resumé"} />
        <NavbarTextButtons title={"Work"} />
        <NavbarTextButtons title={"Contact"} />
        <div className="ml-2 flex">
          <FontAwesomeIcon
            className="ml-4 h-24 hover:scale-110 2xl:h-40"
            icon={faGithub}
            // size={"xl"}
            fixedWidth
          />
          <FontAwesomeIcon
            className="ml-4 h-24 hover:scale-110 2xl:h-40"
            icon={faLinkedin}
            // size={"xl"}
            fixedWidth
          />
        </div>
      </span>
    </nav>
  );
};

export default SmallNavbar;
