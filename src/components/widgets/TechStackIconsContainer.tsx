import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const TechStackIconsContainer = () => {
  const techIconList = [faReact, faJsSquare, faHtml5, faCss3Alt, faNode];
  const techIconItems = techIconList.map((icon, index) => {
    return (
      <FontAwesomeIcon
        key={index}
        className="mx-2 text-4xl text-white cursor-pointer duration-200 ease-out hover:scale-110 hover:ease-out hover:text-azure"
        icon={icon}
        fixedWidth
      />
    );
  });

  return <div className="flex justify-center items-center mt-4">{techIconItems}</div>;
};

export default TechStackIconsContainer;
