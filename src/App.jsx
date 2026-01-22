import "./App.css";
import Herosection from "./components/Herosection";
import GroomingSection from "./components/GroomingSection";
import ServicesSection from "./components/ServicesSection";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <>
      <Herosection />
      <GroomingSection />
      <ServicesSection />
      <TeamSection />
      <ImageSection />
      <Footer />
    </>
  );
}

export default App;
