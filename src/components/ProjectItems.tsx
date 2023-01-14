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
        <article className="lg:prose-headings:lg max-w-4/5 prose absolute bottom-0 flex w-full flex-col items-center justify-center py-[15vh] px-14 prose-headings:underline-offset-8 lg:max-w-none lg:items-start lg:px-36 lg:prose-headings:underline">
          <h1 className="mb-8 font-robotoCondensed tracking-wide text-neutral-100">
            Interview Scheduler
          </h1>
          <p className="prose prose-base font-robotoCondensed font-light text-neutral-100 lg:prose-lg 2xl:prose-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </article>
      </a>
    </SplideSlide>
  );
};

export default ProjectItems;
