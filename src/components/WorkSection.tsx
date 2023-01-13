import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import bgImage from "../assets/interview_scheduler_homepage.png";
import pic from "../assets/ProfilePic.jpg";
import ProjectItems from "./ProjectItems";

const WorkSection = () => {
  return (
    <section className="relative mt-20 w-full bg-white pt-16 lg:mt-0 xl:min-h-screen">
      <div className="mx-auto w-10/12 text-center 2xl:w-[80%]">
        <h2 className="fontSize-smallHeader mb-4 font-robotoCondensed uppercase text-azure ">
          Work
        </h2>
        <h3 className="fontSize-smallHeader mb-8 font-robotoCondensed text-darksteel">
          Hang Around a While!
        </h3>
      </div>
      <div>
        <Splide hasTrack={false} className="max-w-full">
          <SplideTrack>
            <ProjectItems />
            <ProjectItems />
          </SplideTrack>
        </Splide>
      </div>
    </section>
  );
};

export default WorkSection;
