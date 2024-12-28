import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import redUnderline from '../assets/images/webp/red-underline.webp'
import { PodcastArrow, PodcastIcon } from '../utils/icons'
import greenLineOne from "../assets/images/webp/green-line-1.webp"
import greenLineTwo from "../assets/images/webp/green-line-2.webp"
import { INDUSTRY_LOGO_LIST } from '../utils/helper'
import matt from "../assets/images/webp/matt.webp"
import CustomLink from '../common/CustomLink'
import { useNavigate } from 'react-router-dom'
import { MY_TAB } from '../utils/helper'
import logoIpsum from "../assets/images/webp/logoipsum.webp"
import CustomButton from '../common/CustomButton'
import myMap from "../assets/images/webp/map.webp"
import revenue from "../assets/images/webp/revenue.webp"
import sizeOfPlatform from "../assets/images/webp/size-of-platform.webp"
import reachAcross from "../assets/images/webp/reach-across.webp"
import battleTested from "../assets/images/webp/battle-tested.webp"
import growthRate from "../assets/images/webp/growth-rate.webp"


const GrowthPartner = () => {
    const [open, setOpen] = useState()
    const navigate = useNavigate()

    const handleClick = (index) => {
        const formattedDomain = index.replace(/\s+/g, '-');
        navigate(`?value=${formattedDomain}`)
        setOpen(index);

    };
    return (
        <div className='pt-28 relative max-sm:pt-16'>
            <div className='max-w-[1312px] px-4 mx-auto'>
                <Heading text="THE GROWTH PARTNER" myClass='!text-center' />
                <Description text="you've been looking for." myClass='text-center !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pt-[7px] pb-[43px] max-md:pb-8 max-sm:pb-5' />
                <Description text='Businesses trust Venveo to power grow.' myClass='max-w-[641px] max-sm:max-w-[293px] mx-auto text-center' />
                <div className='flex items-center justify-center gap-[78px] pt-[105px] max-md:pt-20 max-sm:pt-14 pb-[57px] max-md:pb-5 max-sm:overflow-x-auto'>
                    {MY_TAB.map((obj, index) => (
                        <p key={index} onClick={() => handleClick(obj.domain)} className={` ${open === obj.domain ? "" : "opacity-35"} text-black text-nowrap relative max-w-max font-maisonDemi text-lg leading-[18px] cursor-pointer`}>{obj.title} {open === obj.domain && <img src={redUnderline} alt='red-underline' className='absolute' />}  </p>
                    ))}
                </div>
                {MY_TAB.map((obj, i) => (
                    <div key={i} className={` max-sm:pt-[23px] ${open === obj.domain ? "" : "hidden"}`} >{i === 0 ?
                        <div className={`bg-industry bg-cover pt-[75px] pb-[63px] pl-20 pr-[76px] flex justify-between max-lg:p-7 max-lg:flex-wrap relative`}>
                            <div className='max-lg:mx-auto'>
                                <Heading text="THE SMARTEST MINDS IN THE INDUSTRY" myClass='max-w-[415px] !text-white !text-start pb-2' />
                                <Description myClass="!font-maisonLight !text-3xl !leading-[30px] max-w-[360px] !text-white max-sm:!text-2xl max-sm:!leading-[26px]" text="Answer our questions and listen to our answers." />
                                <Description text="This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science." myClass="max-w-[360px] !text-white pt-[31px] pb-20 max-lg:pt-4 max-lg:pb-10 " />
                                <button className='flex items-end gap-2 text-white bg-red py-[31px] px-8 group'><PodcastIcon /> Subscribe to podcast <PodcastArrow myClass="group-hover:-rotate-90 transition-all duration-300 origin-center" /></button>
                            </div>
                            <div className='flex max-lg:justify-between max-lg:w-full lg:flex-col justify-between items-center max-lg:pt-10 max-md:gap-10 max-md:overflow-x-auto max-sm:mb-[99px]'>
                                {INDUSTRY_LOGO_LIST.map((obj, i) => (
                                    <img key={i} src={obj.image} alt={obj.logoAlt} className={`${i === 0 ? "h-[66px]" : i === 1 ? "h-[66px]" : i === 2 ? "h-[95px]" : i === 3 ? "h-[110px]" : "h-[23px]"}`} />
                                ))}
                            </div>
                            <div className='bg-white pt-[33px] px-[29px] pb-3 lg:mx-3 max-lg:mt-10 max-lg:mx-auto max-sm:pt-[15px] max-sm:px-[17px] max-sm:pb-[29px] max-sm:absolute left-1/2 max-sm:-translate-x-1/2 -bottom-[45%] max-sm:max-w-[332px] max-sm:w-full'>
                                <img src={matt} alt="matt" className='h-[276px] object-cover rounded-2xl max-sm:h-[140px] w-full ' />
                                <Description myClass="!font-maisonLight !text-3xl !leading-[30px] max-w-[377px] pt-10 pb-4 max-sm:!text-2xl max-sm:!leading-[26px] max-sm:pt-6" text="Matt Risinger on How to Develop Lasting Relationships with Builders" />
                                <Description text="Chief Builder of Rising Build and founder of the Build Show Network" myClass="max-w-[371px]" />
                                <CustomLink text="Listen To Interview" myHref="interview" myClass="mt-[46px]" />
                            </div>
                        </div>
                        : i === 1 ?
                            <div className='bg-focused bg-cover bg-no-repeat h-[720px] pt-[75px] pl-[79px] relative max-md:pt-[37px] max-md:pl-5 max-sm:overflow-hidden'>
                                <Heading text="PROVEN RESULTS" myClass='!text-white !text-start pb-2' />
                                <Description myClass="!font-maisonLight !text-3xl !leading-[30px] !text-white max-sm:!text-2xl max-sm:!leading-[26px]" text="Not hopes and prayers." />
                                <img src={revenue} alt="revenue" className='absolute h-[304px] max-md:h-[248px] bottom-9 -left-10 max-sm:top-[20%] max-sm:left-[5%] ' />
                                <img src={sizeOfPlatform} alt="size-of-platform" className='absolute h-[189px] max-md:h-40 left-[25%] top-[40%] max-sm:-left-8 max-sm:top-[55%] ' />
                                <img src={reachAcross} alt="reach-across" className='absolute h-[189px] max-md:h-40 top-[23%] left-[43%] max-sm:left-12 max-sm:top-[76%] ' />
                                <img src={battleTested} alt="battle-tested" className='absolute h-[189px] max-md:h-40 bottom-[15%] right-[20%] max-sm:left-[40%] max-sm:top-[55%]' />
                                <img src={growthRate} alt="growth-rate" className='absolute h-[189px] max-md:h-40 -right-[14px] top-[32%] max-sm:-right-10 max-sm:top-[76%] ' /> 
                            </div>
                            :
                            <div className='bg-proprietary bg-cover bg-no-repeat '>
                                <div className='max-w-[1157px] relative px-4 mx-auto pt-[75px] max-md:pt-12 pb-[72px] max-sm:pb-[237px]'>
                                    <div className='flex-wrap -mx-3 flex justify-between items-center'>
                                        <div className='w-1/3 px-3 max-lg:w-5/12 max-md:w-full'>
                                            <Heading text="PROJECT RADAR" myClass='!text-white !text-start pb-2' />
                                            <img src={logoIpsum} alt="logoipsum" className='h-[51px]' />
                                            <Description myClass="!font-maisonLight !text-3xl !leading-[30px] !text-white max-sm:!text-2xl max-sm:!leading-[26px] pt-[162px] pb-[14px] max-md:pt-20 max-sm:pt-10" text="Lorem ipsum what this product actually does." />
                                            <Description text="This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science." myClass="max-w-[360px] !text-white pb-12 max-lg:pb-10 " />
                                            <CustomButton text="Call to Action Somewhere" myClass="py-[31px] px-8 !gap-2" />
                                        </div>
                                        <div className='px-3 w-5/12 max-lg:w-1/2 max-md:w-full max-sm:absolute left-1/2 max-sm:-translate-x-1/2 -bottom-[35%] max-sm:max-w-[332px]'>
                                            <div className='bg-white pt-[33px] px-[29px] pb-[37px] lg:mx-3 max-lg:mt-10 max-lg:mx-auto max-sm:pt-[15px] max-sm:px-[17px] max-sm:pb-[29px] '>
                                                <img src={myMap} alt="map" className='h-[276px] object-cover rounded-2xl max-sm:h-[140px] w-full ' />
                                                <Description myClass="!font-maisonLight !text-3xl !leading-[30px] max-w-[377px] pt-10 pb-4 max-sm:!text-2xl max-sm:!leading-[26px] max-sm:pt-6" text="Feature goes here one particular feature can go here of course" />
                                                <Description text="Secondary line to describe what this is in further detail of course" myClass="max-w-[371px]" />
                                                <CustomLink text="Learn More" myHref="interview" myClass="mt-[46px]" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    }
                    </div>
                ))}
            </div>
            <img src={greenLineOne} alt="green-line-1" className='absolute bottom-0 -z-10 ' />
            <img src={greenLineTwo} alt="green-line-2" className='absolute -bottom-5 -z-10 ' />
        </div>
    )
}

export default GrowthPartner