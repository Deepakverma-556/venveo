import React from 'react'
import yellowLine from "../assets/images/webp/yellow-double-line.webp"
import Heading from '../common/Heading'
import Description from '../common/Description'
import { MARKETING_LIST } from '../utils/helper'
import CustomLink from '../common/CustomLink'

const DigitalMarketing = () => {
    return (
        <div className='pt-[132px] relative'>
            <div className='max-w-[1104px] mx-auto px-4'>
                <Description text='Problem we solve.' myClass='text-center !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pb-[7px] max-sm:pb-[5px]' />
                <Heading text="DIGITAL MARKETING FOR TODAY'S BUSINESS" myClass='max-w-[500px] mx-auto' />
                <Description text='We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.' myClass='max-w-[641px] max-sm:max-w-[293px] mx-auto text-center pt-[22px] max-sm:pt-5' />
                <div className='flex flex-wrap pt-[83px] max-sm:pt-[92px]'>
                    {MARKETING_LIST.map((obj, i) => (
                        <div key={i} className={`w-1/2 max-lg:w-full max-lg:pb-5  ${i === 0 ? "lg:pr-8" : i === 1 ? "lg:pl-8 lg:pb-16" : i === 2 ? "lg:pr-8" : "lg:pl-8"}`}>
                            <div className='border-2 bg-white border-babyGreen rounded-[25px] pt-[65px] pr-[71px] pb-[54px] sm:h-[506px] flex flex-col justify-between max-lg:p-8 max-w-max max-lg:mx-auto'>
                                <div className='sm:flex gap-6'>
                                    <div className='lg:pl-[30px] max-sm:pb-2'>
                                        {obj.myIcon}
                                    </div>
                                    <div>
                                        <div className='max-w-[325px]'>{obj.title}</div>
                                        <div className='max-w-[315px] py-[15px]'>{obj.description}</div>
                                        <ul className='list-disc font-maisonDemi text-[15px] leading-5 pl-6 max-w-[300px]'>
                                            <li>{obj.listOne}</li>
                                            <li>{obj.listTwo}</li>
                                            <li>{obj.listThree}</li>
                                        </ul>
                                    </div>
                                </div>
                                <CustomLink myHref="service" text="Explore SEO Service" myClass="lg:!pl-[106px] sm:!pl-20 max-sm:!pt-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={yellowLine} alt="yellow-double-line" className='absolute -z-10 top-[33.5%] max-sm:top-[17%] max-lg:object-cover w-full h-12' />
        </div>
    )
}

export default DigitalMarketing