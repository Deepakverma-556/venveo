import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import redUnderline from '../assets/images/webp/red-underline.webp'
import { PodcastArrow, PodcastIcon } from '../utils/icons'
import greenLineOne from "../assets/images/webp/green-line-1.webp"
import greenLineTwo from "../assets/images/webp/green-line-2.webp"
import { INDUSTRY_LOGO_LIST } from '../utils/helper'
import matt from "../assets/images/webp/matt.webp"
import CustomLink from '../common/CustomLink'


const GrowthPartner = () => {
    return (
        <div className='pt-28 relative'>
            <div className='max-w-[1312px] px-4 mx-auto'>
                <Heading text="THE GROWTH PARTNER" myClass='!text-center' />
                <Description text="you've been looking for." myClass='text-center !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pt-[7px] pb-[43px] max-md:pb-8 max-sm:pb-5' />
                <Description text='Businesses trust Venveo to power grow.' myClass='max-w-[641px] max-sm:max-w-[293px] mx-auto text-center pt-[22px] max-sm:pt-5' />
                <div className='flex items-center justify-center gap-[78px] pt-[105px] pb-[57px]'>
                    <p className='text-black relative max-w-max font-maisonDemi text-lg leading-[18px]'>Industry Expertise <img src={redUnderline} alt='red-underline' className='absolute' /> </p>
                    <p className='text-black relative max-w-max font-maisonDemi text-lg leading-[18px] opacity-35'>ROI Focused <img src={redUnderline} alt='red-underline' className='absolute' /> </p>
                    <p className='text-black relative max-w-max font-maisonDemi text-lg leading-[18px] opacity-35'>Proprietary Technology <img src={redUnderline} alt='red-underline' className='absolute' /> </p>
                </div>
                <div className=' bg-industry bg-cover pt-[75px] pb-[63px] pl-20 pr-[76px] flex justify-betwee max-lg:p-7 max-lg:flex-wrap relative'>
                    <div className='max-lg:mx-auto'>
                        <Heading text="THE SMARTEST MINDS IN THE INDUSTRY" myClass='max-w-[415px] !text-white !text-start pb-2' />
                        <Description myClass="!font-maisonLight !text-3xl !leading-[30px] max-w-[360px] !text-white max-sm:!text-2xl max-sm:!leading-[26px]" text="Answer our questions and listen to our answers." />
                        <Description text="This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science." myClass="max-w-[360px] !text-white pt-[31px] pb-20 max-lg:pt-4 max-lg:pb-10 " />
                        <button className='flex items-end gap-2 text-white bg-red py-[31px] px-8'><PodcastIcon /> Subscribe to podcast <PodcastArrow /></button>
                    </div>
                    <div className='flex max-lg:justify-between max-lg:w-full lg:flex-col justify-between items-center max-lg:pt-10 max-md:gap-10 max-md:overflow-x-auto max-sm:mb-[99px]'>
                        {INDUSTRY_LOGO_LIST.map((obj, i) => (
                            <img key={i} src={obj.image} alt={obj.logoAlt} className={`${i === 0 ? "h-[66px]" : i === 1 ? "h-[66px]" : i === 2 ? "h-[95px]" : i === 3 ? "h-[110px]" : "h-[23px]"}`} />
                        ))}
                    </div>
                    <div className='bg-white pt-[33px] px-[29px] pb-3 lg:mx-3 max-lg:mt-10 max-lg:mx-auto max-sm:pt-[15px] max-sm:px-[17px] max-sm:pb-[29px] max-sm:absolute left-1/2 max-sm:-translate-x-1/2 -bottom-[45%] max-sm:w-[332px]'>
                        <img src={matt} alt="matt" className='h-[276px] object-cover rounded-2xl max-sm:h-[140px] w-full ' />
                        <Description myClass="!font-maisonLight !text-3xl !leading-[30px] max-w-[377px] pt-10 pb-4 max-sm:!text-2xl max-sm:!leading-[26px] max-sm:pt-6" text="Matt Risinger on How to Develop Lasting Relationships with Builders" />
                        <Description text="Chief Builder of Rising Build and founder of the Build Show Network" myClass="max-w-[371px]" />
                        <CustomLink text="Listen To Interview" myHref="interview" myClass="mt-[46px]" />
                    </div>
                </div>

            </div>
            <img src={greenLineOne} alt="green-line-1" className='absolute bottom-0 -z-10 ' />
            <img src={greenLineTwo} alt="green-line-2" className='absolute -bottom-5 -z-10 ' />
        </div>
    )
}

export default GrowthPartner