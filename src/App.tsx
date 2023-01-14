import LandingPage from "./components/LandingPage";
import ProjectItems from "./components/ProjectItems";
import WorkSection from "./components/WorkSection";
// import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar></Navbar> */}
      <LandingPage />
      <WorkSection />
    </div>
  );
}

export default App;
