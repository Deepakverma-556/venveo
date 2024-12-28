import React from 'react'
import Description from '../common/Description'
import Heading from '../common/Heading'
import Slider from 'react-slick';
import { ACTUAL_RESULT_LIST } from '../utils/helper';

const ActualResult = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
    };

    return (
        <div className='mt-[90px] bg-actualResult bg-cover bg-no-repeat pt-[119px] pb-[133px]'>
            <div className=' actual-result max-w-[1440px] mx-auto'>
                <Description text='Actual business.' myClass='text-center !text-white !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl' />
                <Heading text="ACTUAL RESULTS." myClass='text-center !text-white' />
                <Description text='Businesses trust Venveo to power grow.' myClass='!text-white text-center pt-[46px] pb-20' />
                <Slider {...settings}>
                    {ACTUAL_RESULT_LIST.map((obj, i) => (
                        <div key={i} className='max-w-[640px] mx-auto !flex !flex-col'>
                            <img src={obj.image} alt={obj.myAlt} className='mx-auto' />
                            <p className='font-maisonLight text-3xl leading-[39px] text-white max-w-[613] text-center mx-auto pt-[74px] pb-[23px]'>{obj.description}</p>
                            <div>{obj.name}</div>
                            {obj.address}
                            <img src={obj.logo} alt="uslbm" className='h-10 mx-auto mt-[13px]' />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ActualResult