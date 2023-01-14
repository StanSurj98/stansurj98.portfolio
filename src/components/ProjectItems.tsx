import bgImage from "../assets/interview_scheduler_homepage.png";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


type Props = {
  url: string;
  imageURL: string;
  name: string;
  description: string;
};


const ProjectItems = ({ name, description, imageURL, url }: Props) => {
  return (
    <SplideSlide className="group h-screen overflow-hidden">
      <a href={url} target="_blank">
        <img
          className="inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          src={require(imageURL).default}
          alt={`image of ${name} project`}
        />
        <div className="absolute inset-0 right-0 h-full w-full bg-gradient-to-t from-darksteel to-transparent"></div>
        <article className="lg:prose-headings:lg max-w-4/5 prose absolute bottom-0 flex w-full flex-col items-center justify-center py-[15vh] px-14 prose-headings:underline-offset-8 lg:max-w-none lg:items-start lg:px-36 lg:prose-headings:underline">
          <h1 className="mb-8 font-robotoCondensed tracking-wide text-neutral-100">
            {name}
          </h1>
          <p className="prose prose-base font-robotoCondensed font-light text-neutral-100 lg:prose-lg 2xl:prose-xl">
            {description}
          </p>
        </article>
      </a>
    </SplideSlide>
  );
};

export default ProjectItems;
