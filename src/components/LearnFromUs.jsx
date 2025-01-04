import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import brands from "../assets/images/webp/made-for-brands.webp"
import CustomLink from '../common/CustomLink'
import yellowLine from "../assets/images/webp/yellow-double-line.webp"

const LearnFromUs = () => {
  return (
    <div className='pt-[109px] relative pb-[59px] max-sm:pt-[68px] max-sm:pb-4'>
      <div className='max-w-[1354px] sm:px-4 mx-auto'>
        <Heading text="LEARN FROM US." myClass="text-center" />
        <Description text='Digital marketing resources from Venveo to help you grow.' myClass='text-center pt-[13px] max-sm:pt-3 max-sm:max-w-[311px] mx-auto' />
        <CustomLink text="See All" myClass="mx-auto mt-9 mb-20 max-sm:mt-[33px] max-sm:mb-10" myHref="#see" />
        <div className='bg-contractors bg-center bg-cover bg-no-repeat relative pt-[395px] pl-[29px] pb-[31px] max-sm:px-3 max-sm:pb-[15px]'>
          <img src={brands} alt="made-for-brands" className='absolute h-[107px] right-[67px] -top-[29px] max-sm:hidden pointer-events-none' />
          <div className='bg-white rounded-3xl pt-[35px] pr-7 pb-[31px] pl-[29px] max-w-max sm:h-[324px] h-[259px] flex flex-col justify-between max-sm:pt-[30px] max-sm:pr-6 max-sm:pb-[26px] max-sm:pl-[25px]'>
            <div>
              <p className='text-babyGreen font-maisonDemi text-[15px] leading-5'>GUIDES</p>
              <Description text='Marketing to Contractors and Installers: The Ultimate Guide' myClass='!text-black !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl pt-[15px] pb-[15px] max-sm:py-[6px] max-w-[325px]' />
              <Description text="Understanding the process and maximize the opportunities" myClass="max-w-[315px]" />
            </div>
            <CustomLink text="Read More" myHref="#read" />
          </div>
        </div>
      </div>
      <img src={yellowLine} alt="yellow-double-line" className='absolute top-[36%] -z-10 w-full xl:h-16 max-lg:object-cover' />
    </div>
  )
}

export default LearnFromUs