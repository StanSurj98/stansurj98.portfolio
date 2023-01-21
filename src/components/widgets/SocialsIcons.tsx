import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialsIcons = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <IconContext.Provider
        value={{
          className:
            "text-2xl cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out hover:text-azure",
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
  );
};

export default SocialsIcons;
