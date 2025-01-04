import React, { useRef } from 'react'
import Description from '../common/Description'
import Heading from '../common/Heading'
import Slider from 'react-slick';
import { ACTUAL_RESULT_LIST } from '../utils/helper';
import { LearnMoreArrow, LeftFillArrow } from '../utils/icons';
import greenLine from "../assets/images/png/dark-green-line.png"

const ActualResult = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.69,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                }
            },
        ]
    };

    return (
        <div className='mt-[90px] max-sm:mt-[438px] bg-actualResult bg-cover bg-no-repeat pt-[119px] max-sm:pt-[67px] pb-12 relative'>
            <div className=' actual-result max-w-[1920px] mx-auto relative'>
                <Description text='Actual business.' myClass='text-center !text-white !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl' />
                <Heading text="ACTUAL RESULTS." myClass='text-center !text-white' />
                <Description text='Businesses trust Venveo to power grow.' myClass='!text-white text-center pt-[46px] max-sm:pt-[22px] max-sm:max-w-[283px] max-sm:mx-auto pb-20 max-md:pb-16 max-sm:pb-10' />
                <Slider ref={sliderRef} {...settings}>
                    {ACTUAL_RESULT_LIST.map((obj, i) => (
                        <div key={i} className='max-w-[640px] mx-auto !flex !flex-col pb-14 max-sm:pb-8'>
                            <img src={obj.image} alt={obj.myAlt} className='mx-auto' />
                            <p className='font-maisonLight text-3xl leading-[39px] text-white max-w-[613] text-center mx-auto pt-[74px] pb-[23px] max-sm:!text-2xl max-sm:!leading-[26px] max-sm:max-w-[251px] max-sm:pt-[30px]'>{obj.description}</p>
                            <div>{obj.name}</div>
                            {obj.address}
                            <img src={obj.logo} alt="uslbm" className='h-10 mx-auto mt-[13px] max-sm:mt-[6px]' />
                        </div>
                    ))}
                </Slider>
                <div>
                    <button onClick={next} className='py-[54px] max-md:py-10 max-md:pl-[22.37px] max-md:pr-[9.62px] px-[30px] bg-white rounded-tl-[30px] rounded-bl-[30px] absolute right-0 top-1/2 max-md:top-[60%] max-sm:top-[53%] md:-translate-y-[100%]'><LearnMoreArrow /></button>
                    <button onClick={previous} className='py-[54px] max-md:py-10 max-md:pr-[22.37px] max-md:pl-[9.62px] px-[30px] bg-white rounded-tr-[30px] rounded-br-[30px] absolute left-0 top-1/2 max-md:top-[60%] max-sm:top-[53%] md:-translate-y-[100%]'><LeftFillArrow /></button>
                </div>
            </div>
            <img src={greenLine} alt="dark-green-line" className='absolute -bottom-5 max-lg:object-cover h-3 w-full' />
        </div>
    )
}

export default ActualResult