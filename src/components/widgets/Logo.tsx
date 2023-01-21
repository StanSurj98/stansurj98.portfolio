import logoMain from "../../assets/ss_logo_main_nobg.png";
import logoAlt from "../../assets/ss_logo_alt_nobg.png";

type Props = {
  alt?: boolean;
};

const Logo = ({ alt }: Props) => {
  return (
    <a href="#landingPage" className="flex items-center">
      <img
        src={alt ? logoAlt : logoMain}
        alt="Personal Logo for StanSurj98"
        className="w-14 cursor-pointer duration-200 ease-out hover:scale-105 hover:ease-out lg:w-16 2xl:w-20"
      />
    </a>
  );
};

export default Logo;
