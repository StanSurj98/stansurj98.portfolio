import ProfilePicContainer from "./widgets/ProfilePicContainer";
import TechStackIconsContainer from "./widgets/TechStackIconsContainer";
import '../index.css'

const ProfileAndTechSection = () => {
  return (
    <div className="min-h-2/5 flex flex-col bg-gradient-to-br from-darksteel to-rich-black px-8 lg:h-full lg:w-1/2 lg:rounded-r-md lg:px-16">
      <div className="mt-8 -mb-4 2xl:mb-10 flex h-2/3 items-start justify-center lg:mt-16 lg:h-3/5 2xl:h-2/5">
        <ProfilePicContainer />
      </div>
      <div className="flex flex-col items-center justify-start 2xl:mt-10">
        <h1 className="fontSize-smallHeader text-center text-white 2xl:mb-6 tracking-wide">
          Tech I Love Working With
        </h1>
        <TechStackIconsContainer />
      </div>
    </div>
  );
};

export default ProfileAndTechSection;
