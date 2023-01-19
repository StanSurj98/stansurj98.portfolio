import SmallNavbar from "./SmallNavbar";
import AboutBlurb from "./widgets/AboutBlurb";
import ButtonMain from "./widgets/ButtonMain";
import IntroCardTypewriterHeader from "./widgets/IntroCardTypewriterHeader";
import Nameplate from "./widgets/Nameplate";
import "../index.css";

const LogoAndIntroSection = () => {
  return (
    <section className="flex h-max w-full flex-col items-start bg-white px-10 py-8 lg:h-full lg:w-1/2 lg:justify-start lg:rounded-l-md lg:px-16 lg:py-10">
      {/* Only visible on medium+ screens */}
      <SmallNavbar />
      <Nameplate />
      <h1 className="fontSize-smallHeader text-azure my-4">
        ABOUT
      </h1>
      <IntroCardTypewriterHeader />
      <AboutBlurb />
      <div className="flex w-full items-center justify-center 2xl:mt-12">
        <ButtonMain link="#work">View My Work</ButtonMain>
      </div>
    </section>
  );
};

export default LogoAndIntroSection;
