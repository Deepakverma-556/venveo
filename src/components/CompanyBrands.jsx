import React from 'react'
import Description from '../common/Description'
import Slider from 'react-slick';
import { COMAPNY_BRAND_LIST } from '../utils/helper';
import doubleLine from '../assets/images/webp/double-line.webp'

const CompanyBrands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1,
                    speed: 3000,
                    cssEase:"linear",
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1,
                    speed: 3000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1,
                    speed: 3000,
                    cssEase: "linear",
                }
            }
        ]
    };
    return (
        <div className='pt-[314px] max-md:pt-60 max-sm:pt-[259px] brands relative'>
            <div className='max-w-[1057px] mx-auto px-4'>
                <Description text='Featured in' myClass='!leading-[15px] text-center' />
                <div className='pt-[49px] max-md:pt-10 max-sm:pt-5'>
                    <Slider {...settings}>
                        {COMAPNY_BRAND_LIST.map((obj, i) => (
                            <a key={i} href="#brands w-0 flex ">
                                <img key={i} src={obj.image} alt={obj.alt} className={` mx-auto ${i === 0 ? "h-7 max-sm:h-6" : i === 1 ? "h-9 max-sm:h-7 " : i === 2 ? "h-[27px] max-sm:h-6" : i === 3 ? "h-[27px] max-sm:h-6" : "h-7 max-sm:h-6"}`} />
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
            <img src={doubleLine} alt="double-line" className='absolute h-[43px] -bottom-[74px] w-full max-lg:object-cover' />
        </div>
    )
}

export default CompanyBrands