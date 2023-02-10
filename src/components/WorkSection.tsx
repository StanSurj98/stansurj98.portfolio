import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectItems from "./ProjectItems";
import { projectsList, ProjectInterface } from "../Projects";

// -- Component --
const WorkSection: React.FC = () => {
  // -- Helpers --
  const projectItems: JSX.Element[] = projectsList.map(
    ({ name, description, url, imageURL }: ProjectInterface, index: number) => {
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
    <section id="work" className="h-screen w-screen">
      <Splide hasTrack={false} className="max-w-full overflow-hidden">
        <SplideTrack>{projectItems}</SplideTrack>
      </Splide>
    </section>
  );
};

export default WorkSection;
