import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectItems from "./ProjectItems";
import { projectsList } from "../projects/Projects";

const WorkSection = () => {
  const projectItems = projectsList.map(
    ({ name, description, url, imageURL }, index) => {
      return (
        <ProjectItems
          key={index}
          name={name}
          description={description}
          url={url}
          imageURL={imageURL}
        />
      );
    }
  );
  return (
    <section id="work" className="w-screen h-screen">
        <Splide hasTrack={false} className="max-w-full overflow-hidden">
          <SplideTrack>{projectItems}</SplideTrack>
        </Splide>
    </section>
  );
};

export default WorkSection;
