import React from 'react'
import Description from '../common/Description'
import Heading from '../common/Heading'
import redLine from '../assets/images/webp/red-line.webp'
import { SATISIED_CLIENT_LIST } from '../utils/helper'
import CustomLink from '../common/CustomLink'

const SatisfiedClients = () => {
    return (
        <div className='pt-[217px] max-sm:pt-[127px] mx-auto max-w-[1440px]'>
            <Description text='Driving digital revenue for over' myClass='text-center !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pb-[7px]' />
            <Heading secondText='SATISFIED CLIENTS.' spanText='1,400+' image={redLine} myAlt='red-ine' imgClass='h-3 max-sm:h-2 max-sm:bottom-2 max-md:w-[84px] w-[119px] !-translate-x-[85px] max-md:!-translate-x-16 bottom-0 pointer-events-none' />
            <div className='flex max-[1400px]:flex-wrap justify-center lg:gap-[60px] pt-7 max-[1400px]:pt-[88px] max-lg:pt-16 max-md:pt-12'>
                {SATISIED_CLIENT_LIST.map((obj, i) => (
                    <div key={i} className='w-1/3 max-[1200px]:w-1/2 max-sm:w-full mt-[60px] max-[1400px]:mt-0 max-lg:px-4 max-lg:pt-8'>
                        <div className='relative pt-[35px] px-[29px] max-sm:px-6 pb-9 w-full '>
                            <img src={obj.bgImage} alt={obj.bgImageAlt} className='absolute left-0 right-0 top-0 bottom-0 -z-10 w-full h-full' />
                            <div className='bg-white rounded-[25px] pt-[38px] pr-7 pb-[31px] pl-[29px] relative group/card max-md:p-5'>
                                <img src={obj.logo} alt={obj.logoAlt} className='h-9 pointer-events-none' />
                                <div className='py-6'>{obj.title}</div>
                                {obj.description}
                                <CustomLink text="LearnMore" myHref='learn' myClass="mt-[54px]" />
                                <div className={`${i === 2 ? "hidden" : ""} absolute rounded-full -top-[15px] group-hover/card:bg-black transition-all duration-300 py-[7px] pl-3 pr-6 max-sm:hidden`}><p className='text-black font-maisonDemi text-xs leading-5 group-hover/card:text-white transition-all duration-300'>{obj.company}</p></div>
                            </div>
                            <div className='flex items-center px-[29px] max-md:px-3 justify-between pt-[13px]'>
                                <div>
                                    <div>{obj.leadsPrecent}</div>
                                    <p className='font-maisonMedium text-[15px] leading-[15px]'>{obj.leadsText}</p>
                                </div>
                                <div>
                                    <div>{obj.adLeads}</div>
                                    <p className='font-maisonMedium text-[15px] leading-[15px] text-right'>{obj.adLeadsText}</p>
                                </div>
                                <div>
                                    <div>{obj.webTrafficPrecent}</div>
                                    <p className='font-maisonMedium text-[15px] leading-[15px]'>{obj.webTrafficText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SatisfiedClients