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
    // this mt-72 is a hacky fix for mobile, not sure why it's overlapping the landing page intro card...
    <section id="work" className="w-full h-screen pt-16 lg:mt-0 border-2 border-green-200">
      {/* <div className="mx-auto w-10/12 text-center 2xl:w-[80%]">
        <h2 className="fontSize-smallHeader mb-4 font-robotoCondensed uppercase text-azure ">
          Work
        </h2>
        <h3 className="fontSize-smallHeader mb-8 font-robotoCondensed text-darksteel">
          Hang Around a While!
        </h3>
      </div>
      <div>
        <Splide hasTrack={false} className="max-w-full">
          <SplideTrack>{projectItems}</SplideTrack>
        </Splide>
      </div> */}
    </section>
  );
};

export default WorkSection;
