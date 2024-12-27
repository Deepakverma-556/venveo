import './App.css';
import CompanyBrands from './components/CompanyBrands';
import DigitalMarketing from './components/DigitalMarketing';
import GrowthPartner from './components/GrowthPartner';
import Hero from './components/Hero';
import LearnFromUs from './components/LearnFromUs';
import Outsmart from './components/Outsmart';
import SatisfiedClients from './components/SatisfiedClients';

function App() {
  return (
    <>
      <Hero />
      <CompanyBrands />
      <SatisfiedClients />
      <DigitalMarketing />
      <Outsmart />
      <GrowthPartner />
      <LearnFromUs />
    </>
  );
}

export default App;
