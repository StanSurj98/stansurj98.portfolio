import MobileNavbar from "./components/MobileNavbar"
import LandingPage from "./components/LandingPage";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import SectionHeader from "./components/widgets/SectionHeader";

function App() {
  return (
    <div className="overflow-x-hidden">
      <MobileNavbar></MobileNavbar>
      <LandingPage />
      <SectionHeader header={"WORK"} tagline={"Stay A While!"}/>
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
