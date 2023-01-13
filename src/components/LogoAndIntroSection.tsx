import SmallNavbar from "./SmallNavbar";
import AboutBlurb from "./widgets/AboutBlurb";
import ButtonMain from "./widgets/ButtonMain";
import IntroCardTypewriterHeader from "./widgets/IntroCardTypewriterHeader";
import Nameplate from "./widgets/Nameplate";
import '../index.css'

const LogoAndIntroSection = () => {
  return (
    <div className="min-h-3/5 relative flex h-full flex-col items-start bg-white px-8 pb-5 lg:h-full lg:w-1/2 lg:justify-start lg:rounded-l-md lg:px-16">
      {/* Only visible on medium+ screens */}
      <SmallNavbar />
      <Nameplate />
      <h1 className="fontSize-smallHeader my-2 text-azure lg:mb-4 2xl:mb-6">
        ABOUT
      </h1>
      <IntroCardTypewriterHeader />
      <AboutBlurb />
      <div className="flex w-full items-center justify-center 2xl:mt-20">
        <ButtonMain
          onClick={() => {
            console.log("clicked");
          }}
        >
          View My Work
        </ButtonMain>
      </div>
    </div>
  );
};

export default LogoAndIntroSection;
