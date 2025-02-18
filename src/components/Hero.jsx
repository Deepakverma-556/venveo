import React, { useState } from 'react'
import Header from '../common/Header'
import greenLine from '../assets/images/webp/green-line.webp'
import hero from '../assets/images/webp/hero.webp'
import brand from "../assets/images/webp/made-for-brands.webp"
import singleLine from "../assets/images/webp/single-line.webp"
import halfStar from '../assets/images/png/half-star.png'
import Heading from '../common/Heading'
import CustomInput from '../common/CustomInput'

const Hero = () => {
  const [formValue, setFormValue] = useState({
    website: "",
  })

  const handleSubmit = (e) => {
    setFormValue({
      website: "",
    })
    e.preventDefault();
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };
  
  return (
    <div className='bg-darkGreen relative'>
      <div className='max-w-[1440px] mx-auto relative pb-[322px] max-md:pb-52 max-sm:pb-[175px]'>
        <div className='max-w-[1358px] px-4 mx-auto'>
          <Header myClass='absolute top-0 right-0 ' />
          <div className='bg-star h-[698px] max-md:w-[500px] max-md:h-[500px] max-sm:h-[261px] max-sm:w-[261px] max-sm:-left-[122px] max-sm:-top-4 bg-cover bg-no-repeat w-[698px] absolute -left-80 -top-11'></div>
          <img src={halfStar} alt="half-star" className='absolute bottom-0 right-0 h-[150px] max-sm:h-32' />
          <Heading myClass='max-md:!text-6xl max-sm:!text-[60px] max-sm:!leading-[52px] !text-[120px] !leading-[104px] !text-white !max-w-[619px] mx-auto pt-[39px] pb-7 max-sm:pt-[51px] relative' text='MAKE MARKETING A' secondText='MACHINE' spanText='GROWTH' image={greenLine} myAlt='green-line' imgClass='pointer-events-none h-5'/>
          <p className='relative max-w-[656px] mx-auto text-center text-white text-2xl max-md:text-[22px] leading-[30px] font-maisonLight pb-6 max-sm:pb-[30px] max-sm:leading-7'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
          <CustomInput myPlaceholder='Enter Your Website' myType='text' text='Analyze' customSubmit={handleSubmit} customChange={handleChange} myValue={formValue.website} inputId='website' myClass="sm:!pr-[37.95px]" inputClass="sm:!pl-[34.27px]" />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 h-[490px] w-full max-w-[871px] max-lg:h-96 max-md:h-64 max-sm:h-[329px] max-sm:w-[328px] -bottom-[245px] max-lg:-bottom-[192px] max-md:-bottom-[123px] max-sm:-bottom-[203px]'>
          <div className='relative'>
            <img src={brand} alt="made-for-brands" className='h-[107px] max-sm:h-[107px] absolute -left-[50px] max-lg:left-10 bottom-[47px] max-md:h-14 max-md:left-[17%] max-md:bottom-[7%] max-sm:-bottom-6 max-sm:left-[62%]' />
            <img src={hero} alt="hero" className='object-cover h-[490px] max-lg:h-96 max-md:h-64 max-sm:h-[329px] mx-auto' />
          </div>
        </div>
      </div>
        <div className='absolute -bottom-4 -z-10 w-full'>
          <img src={singleLine} alt="single-line" className='absolute w-full' />
        </div>
    </div>
  )
}

export default Hero