import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero"
import CompanyBrands from "./components/CompanyBrands"
import SatisfiedClients from "./components/SatisfiedClients"
import DigitalMarketing from "./components/DigitalMarketing"
import Outsmart from "./components/Outsmart"
import GrowthPartner from "./components/GrowthPartner"
import ActualResult from "./components/ActualResult"
import LearnFromUs from './components/LearnFromUs';
import MultiChannel from './components/MultiChannel';
import YourGoals from './components/YourGoals';
import Footer from './components/Footer';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <CompanyBrands />
      <SatisfiedClients />
      <DigitalMarketing />
      <Outsmart />
      <GrowthPartner />
      <ActualResult />
      <LearnFromUs />
      <MultiChannel />
      <YourGoals />
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
