import React, { useState } from 'react'
import { MULTI_CHANNEL_LIST } from '../utils/helper'
import Description from '../common/Description'
import CustomLink from '../common/CustomLink'
import { LearnMoreArrow} from '../utils/icons'

const MultiChannel = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShow = () => {
        setShowMore(!showMore);
    };
    return (
        <div className='max-w-[1440px] mx-auto pb-[61px]'>
            <div className='flex gap-[60px] max-sm:gap-5 max-xl:flex-wrap justify-center'>
                {MULTI_CHANNEL_LIST.slice(0, showMore ? MULTI_CHANNEL_LIST.length : 1).map((obj, i) => (
                    <div key={i} className={`${i === 0 ? "bg-marketing" : i === 1 ? "bg-lead" : "bg-ecommerce"} bg-cover sm:hidden pt-[229px] px-[29px] pb-[29px] max-sm:pt-4 max-sm:pb-5 max-sm:pl-[113px] max-sm:pr-0`}>
                        <div className='bg-white rounded-3xl pt-[35px] pr-7 pb-[29px] pl-[29px] max-w-max sm:h-[320px] flex flex-col justify-between max-sm:pt-[30px] max-sm:pr-6 max-sm:pb-[26px] max-sm:pl-[25px] max-sm:rounded-tr-none max-sm:rounded-br-none'>
                            <div>
                                <p className='text-babyGreen font-maisonDemi text-[15px] leading-5'>{obj.myOption}</p>
                                <Description text={obj.title} myClass='!text-black !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pt-[15px] pb-[15px] max-sm:pt-[6px] max-sm:pb-5 max-w-[325px]' />
                                <div className='max-w-[315px] max-sm:hidden flex'>{obj.description}</div>
                            </div>
                            <CustomLink text="Read More" myHref="#read" />
                        </div>
                    </div>
                ))}
                {MULTI_CHANNEL_LIST.map((obj, i) => (
                    <div key={i} className={`${i === 0 ? "bg-marketing" : i === 1 ? "bg-lead" : "bg-ecommerce"} bg-cover max-sm:hidden pt-[229px] px-[29px] pb-[29px] max-sm:pt-4 max-sm:pb-5 max-sm:pl-[113px] max-sm:pr-0`}>
                        <div className='bg-white rounded-3xl pt-[35px] pr-7 pb-[29px] pl-[29px] max-w-max sm:h-[320px] flex flex-col justify-between max-sm:pt-[30px] max-sm:pr-6 max-sm:pb-[26px] max-sm:pl-[25px] max-sm:rounded-tr-none max-sm:rounded-br-none'>
                            <div>
                                <p className='text-babyGreen font-maisonDemi text-[15px] leading-5'>{obj.myOption}</p>
                                <Description text={obj.title} myClass='!text-black !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pt-[15px] pb-[15px] max-sm:pt-[6px] max-sm:pb-5 max-w-[325px]' />
                                <div className='max-w-[315px] max-sm:hidden flex'>{obj.description}</div>
                            </div>
                            <CustomLink text="Read More" myHref="#read" />
                        </div>
                    </div>
                ))}
                <button onClick={toggleShow} className={`flex items-center sm:hidden font-maisonMedium text-[15px] leading-[15px] group mt-4 gap-1`}> {showMore ? 'Show Less Resources' : 'Show More Resources'} <LearnMoreArrow svgClass="h-[5px] w-[5px] mt-[2px] rotate-90 group-hover:rotate-0 origin-center transition-all duration-300" /> </button>
            </div>
        </div>
    )
}

export default MultiChannel