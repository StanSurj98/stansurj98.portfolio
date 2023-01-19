import ProfilePicContainer from "./widgets/ProfilePicContainer";
import TechStackIconsContainer from "./widgets/TechStackIconsContainer";
import "../index.css";

const ProfileAndTechSection = () => {
  return (
    <section className="flex h-auto flex-col overflow-hidden bg-gradient-to-br from-darksteel to-rich-black py-8 px-10 lg:h-full lg:w-1/2 lg:rounded-r-md lg:px-16">
      <ProfilePicContainer />

      <div className="flex flex-col items-center justify-star 2xl:mt-10 ">
        <h1 className="fontSize-smallHeader text-center tracking-wide text-white lg:mb-4 2xl:mb-6">
          Tech I Love Working With
        </h1>
        <TechStackIconsContainer />
      </div>
    </section>
  );
};

export default ProfileAndTechSection;
