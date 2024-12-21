import React from 'react'
import Description from '../common/Description'
import Heading from '../common/Heading'
import redLine from '../assets/images/webp/red-line.webp'
import { SATISIED_CLIENT_LIST } from '../utils/helper'
import { LearnMoreArrow } from '../utils/icons'

const SatisfiedClients = () => {
    return (
        <div className='pt-[217px] mx-auto max-w-[1440px]'>
            <Description text='Driving digital revenue for over' myClass='text-center !leading-[30px] !font-light !text-3xl pb-[7px]' />
            <Heading secondText='SATISFIED CLIENTS.' spanText='1,400+' image={redLine} myAlt='red-ine' imgClass='h-3 w-[119px] !-translate-x-[85px] bottom-0' />
            <div className='flex gap-[60px] pt-16'>
                {SATISIED_CLIENT_LIST.map((obj, i) => (
                    <div key={i} className='w-1/3 relative pt-[35px] px-[29px]'>
                        <img src={obj.bgImage} alt={obj.bgImageAlt} className='absolute left-0 right-0 top-0 bottom-0 -z-10' />
                        <div className='bg-white rounded-[25px] pt-[38px] pr-7 pb-[31px] pl-[29px] relative group/card'>
                            <img src={obj.logo} alt={obj.logoAlt} className='h-9' />
                            <div className='py-6'>{obj.title}</div>
                            {obj.description}
                            <a href="#learn" className='flex items-center font-maisonDemi text-[15px] leading-5 gap-2 pt-[54px] group hover:!text-lemon transition-all duration-300 max-w-max'>Learn More <LearnMoreArrow myClass='group-hover:fill-lemon transition-all duration-300' /></a>
                            <div className='absolute rounded-full -top-3 group-hover/card:bg-black transition-all duration-300 py-[7px] pl-3 pr-6'><p className='text-black font-maisonDemi text-xs leading-5 group-hover/card:text-white transition-all duration-300'>{obj.company}</p></div>
                        </div>
                        <div className='flex items-center px-[29px] justify-between pt-[13px]'>
                            <div>
                                <h2>{obj.leadsPrecent}</h2>
                                <p className='font-maisonMedium text-[15px] leading-[15px]'>{obj.leadsText}</p>
                            </div>
                            <div>
                                <h2>{obj.adLeads}</h2>
                                <p className='font-maisonMedium text-[15px] leading-[15px] text-right'>{obj.adLeadsText}</p>
                            </div>
                            <div>
                                <h2>{obj.webTrafficPrecent}</h2>
                                <p className='font-maisonMedium text-[15px] leading-[15px]'>{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SatisfiedClients