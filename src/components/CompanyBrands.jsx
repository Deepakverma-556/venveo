import React from 'react'
import Description from '../common/Description'
import Slider from 'react-slick';
import { COMAPNY_BRAND_LIST } from '../utils/helper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyBrands = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className='pt-[314px] brands'>
            <div className='max-w-[1057px] mx-auto px-4'>
                <Description text='Featured in' myClass='!leading-[15px] text-center' />
                <div>
                    <Slider {...settings}>
                        {COMAPNY_BRAND_LIST.map((obj, i) => (
                            <img key={i} src={obj.image} alt={obj.alt} height={obj.myHeigth} width={obj.myWidth} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CompanyBrands