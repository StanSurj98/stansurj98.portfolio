import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNode,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const TechStackIconsContainer = () => {
  const techIconList = [
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faNode,
    faPython,
  ];
  const techIconItems = techIconList.map((icon, index) => {
    return (
      <FontAwesomeIcon
        key={index}
        className="m-2 cursor-pointer text-4xl text-white duration-200 ease-out hover:scale-110 hover:text-azure hover:ease-out"
        icon={icon}
        fixedWidth
      />
    );
  });

  return (
    <div className="max-w-4/5 mt-4 flex flex-wrap items-center justify-center">
      {techIconItems}
    </div>
  );
};

export default TechStackIconsContainer;
