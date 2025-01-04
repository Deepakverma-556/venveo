import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../Hero"
import CompanyBrands from "../CompanyBrands"
import SatisfiedClients from "../SatisfiedClients"
import DigitalMarketing from "../DigitalMarketing"
import Outsmart from "../Outsmart"
import GrowthPartner from "../GrowthPartner"
import ActualResult from "../ActualResult"
import LearnFromUs from '../LearnFromUs';
import MultiChannel from '../MultiChannel';
import YourGoals from '../YourGoals';
import Footer from '../Footer';
import BackToTop from '../../common/BackToTop';
const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home