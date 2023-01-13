import bgImage from "../assets/interview_scheduler_homepage.png";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ProjectItems = () => {
  return (
    <SplideSlide className="group h-screen overflow-hidden">
      <a href="https://google.ca" target="_blank">
        <img
          className="inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          src={bgImage}
          alt={"Project Screenshot"}
        />
        <div className="absolute inset-0 right-0 h-full w-full bg-gradient-to-t from-darksteel to-transparent"></div>
        <div className="max-w-4/5 absolute bottom-0 flex w-full flex-col items-center justify-center py-[25vh] px-14 lg:max-w-none lg:items-start lg:px-36">
          <h1 className="fontSize-smallHeader tracking-wide mb-8 text-neutral-100">
            Interview Scheduler
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </a>
    </SplideSlide>
  );
};

export default ProjectItems;