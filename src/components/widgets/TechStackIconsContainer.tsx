import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiExpress, SiTailwindcss, SiDocker } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconContext } from "react-icons";

const TechStackIconsContainer = () => {
  const techIconList = [
    <FaReact />,
    <FaJsSquare />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaNode />,
    <SiExpress />,
    <SiTailwindcss />,
    <SiPostgresql />,
    <TbBrandNextjs />,
    <FaPython />,
    <SiDocker />,
  ];
  const techIconItems = techIconList.map((icon) => {
    return icon;
  });

  return (
    <div className="2xl:w-2/4 mt-4 flex flex-wrap items-center justify-center">
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
