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
const Home = () => {
    return (
        <>
            <Hero />
            <CompanyBrands />
            <SatisfiedClients />
            <DigitalMarketing />
            <Outsmart />
            <GrowthPartner />
            <ActualResult/>
        </>
    )
}

export default Home