import bgImage from "../assets/interview_scheduler_homepage.png";

const ProjectItems = () => {
  return (
    <a href="https://google.com" target="_blank">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={bgImage}
        alt={"Project Screenshot"}
      />
      {/* Gradient Overlay */}

      <div className="absolute h-full w-full bg-gradient-to-t from-darksteel to-transparent">
        {/* Details Box */}
        <div className="absolute bottom-0 z-10">
          <p>Date</p>
          <h1>Title</h1>
          <p className="text-l font-robotoCondensed">
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
      </div>
    </a>
  );
};

export default ProjectItems;
