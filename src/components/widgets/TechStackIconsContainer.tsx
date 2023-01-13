import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const TechStackIconsContainer = () => {
  const techIconList = [
    <FaReact />,
    <FaJsSquare />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaNode />,
    <FaPython />,
  ];
  const techIconItems = techIconList.map((icon, index) => {
    return icon;
  });

  return (
    <div className="max-w-4/5 mt-4 flex flex-wrap items-center justify-center">
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
