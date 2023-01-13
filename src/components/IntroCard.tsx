import LogoAndIntroSection from "./LogoAndIntroSection";
import ProfileAndTechSection from "./ProfileAndTechSection";

const IntroCard = () => {
  return (
    <section
      id="introCard"
      className="flex h-full w-full flex-col lg:h-[90%] lg:w-4/5 lg:flex-row-reverse lg:justify-between lg:drop-shadow-custom-large"
    >
      <ProfileAndTechSection />
      <LogoAndIntroSection />
    </section>
  );
};

export default IntroCard;
