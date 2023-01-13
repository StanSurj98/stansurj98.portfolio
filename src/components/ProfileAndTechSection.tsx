import ProfilePicContainer from "./widgets/ProfilePicContainer";

const ProfileAndTechSection = () => {
  return (
    <div className="min-h-2/5 flex flex-col bg-gradient-to-br from-darksteel to-rich-black lg:h-full lg:w-1/2 lg:rounded-r-md">
      <div className="mt-6 flex h-full items-start justify-center lg:mt-16 lg:h-2/3">
        <ProfilePicContainer />
      </div>
    </div>
  );
};

export default ProfileAndTechSection;
