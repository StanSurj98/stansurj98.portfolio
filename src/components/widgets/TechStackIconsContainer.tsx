import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconContext } from "react-icons";

// -- Component --
const TechStackIconsContainer = () => {
  
  // -- Data --
  const techIconList = [
    { icon: <FaReact />, link: "https://reactjs.org/" },
    { icon: <FaJsSquare />, link: "https://www.javascript.com/" },
    { icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
    {
      icon: <FaHtml5 />,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
    },
    {
      icon: <FaCss3Alt />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { icon: <FaNode />, link: "https://nodejs.org/en/" },
    { icon: <SiExpress />, link: "http://expressjs.com" },
    { icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
    { icon: <SiPostgresql />, link: "https://www.postgresql.org" },
    { icon: <TbBrandNextjs />, link: "https://nextjs.org/" },
    { icon: <FaPython />, link: "https://www.python.org" },
    { icon: <SiDocker />, link: "https://www.docker.com/" },
  ];

  // -- Helpers --
  const techIconItems:JSX.Element[] = techIconList.map(({ icon, link }) => {
    return (
      <a key={link} href={link} target="_blank">
        {icon}
      </a>
    );
  });

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center 2xl:w-2/4">
      <IconContext.Provider
        value={{
          className:
            "m-2 cursor-pointer text-4xl text-white duration-200 ease-out hover:scale-110 hover:text-azure hover:ease-out",
        }}
      >
        {techIconItems}
      </IconContext.Provider>
    </div>
  );
};

export default TechStackIconsContainer;
