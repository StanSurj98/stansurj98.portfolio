import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { ProjectInterface } from "../Projects";


// -- Component --
const ProjectItems: React.FC<ProjectInterface> = ({ name, description, imageURL, url }) => {
  
  // Cloudinary Setup for Project Images from CMS
  const cld: Cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dho5v3zlt",
    },
  });
  const projectImage:CloudinaryImage = cld.image(`portfolio-site/${imageURL}`);

  return (
    <SplideSlide className="group relative h-screen w-screen overflow-hidden">
      {/* The entire slide is an <a> with href to project */}
      <a href={url} target="_blank">
        {/* Layer at most-back is image with hover effect */}
        <div className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105">
          <AdvancedImage cldImg={projectImage} />
        </div>
        {/* Next layer is semi-transparent overlay, absolute but relative to this slide parent */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-darksteel to-transparent"></div>

        {/* Top most layer is project descriptions and such */}
        <article className="max-w-4/5 lg:prose-headings:lg prose absolute bottom-0 flex flex-col items-center justify-center px-10 pb-[15vh]  prose-headings:underline-offset-8 lg:max-w-none lg:items-start lg:px-36 lg:prose-headings:underline">
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
