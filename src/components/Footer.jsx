import React, { useState } from 'react'
import { FOOTER_LINK_LIST, HELP_LIST } from '../utils/helper'
import FooterLinks from '../common/FooterLinks'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import logo from "../assets/images/png/logo.png"
import { FacebookIcon, InstagramIcon, LearnMoreArrow, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../utils/icons'

const Footer = () => {
    const [active, setActive] = useState(0)
    const year = new Date().getFullYear()

    const handleClick = (i) => {
        setActive(active === i ? "" : i)
    }
    const [formValue, setFormValue] = useState({
        email: "",
    })

    const handleSubmit = (e) => {
        setFormValue({
            email: "",
        })
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValue({ ...formValue, [id]: value });
    };
    return (
        <div className='bg-darkGreen pt-[90px] pb-[100px] max-sm:pt-[57px] max-sm:pb-[86px]'>
            <div className='max-w-[1351px] mx-auto px-4'>
                <div className='flex flex-wrap -mx-3 max-md:flex-col-reverse'>
                    <div className='w-2/3 px-3 max-md:w-full'>
                        <div className='sm:hidden'>
                            {HELP_LIST.map((obj, i) => (
                                <div key={i} onClick={() => handleClick(i)} className='overflow-hidden cursor-pointer flex flex-col max-w-max'>
                                    <h2 className='font-maisonMedium text-[15px] leading-[15px] mb-[31px] flex gap-1 items-center text-lemon'>{obj.title}<LearnMoreArrow svgClass={`h-[7px] rotate-90 transition-all duration-300 ${active === i ? "rotate-0" : ""}`} myClass="fill-lemon" /></h2>
                                    <ul className={`${active === i ? "h-[310px]" : "h-0 opacity-0 "} transition-all duration-500`}>
                                        <li className='flex items-center gap-4 pb-[30px]'>{obj.iconOne}<FooterLinks text={obj.descriptionOne} /></li>
                                        <li className='flex items-center gap-4 pb-[30px]'>{obj.iconTwo}<FooterLinks text={obj.descriptionTwo} /></li>
                                        <li className='flex items-center gap-4 pb-[30px]'>{obj.iconThree}<FooterLinks text={obj.descriptionThree} /></li>
                                        <li className='flex items-center gap-4 pb-[30px]'>{obj.iconFour}<FooterLinks text={obj.descriptionFour} /></li>
                                        <li className='flex items-center gap-4 pb-[30px]'>{obj.iconFive}<FooterLinks text={obj.descriptionFive} /></li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-wrap -mx-3 max-sm:hidden'>
                            {FOOTER_LINK_LIST.map((obj, i) => (
                                <div key={i} className='w-1/4 px-3'>
                                    <ul className='max-md:text-center'>
                                        <li><p className='font-maisonMedium text-xs leading-[13px] text-white pb-[25px]'>{obj.title}</p></li>
                                        <li><FooterLinks text={obj.linkOne} /></li>
                                        <li><FooterLinks text={obj.linkTwo} /></li>
                                        <li><FooterLinks text={obj.linkThree} /></li>
                                        <li><FooterLinks text={obj.linkFour} /></li>
                                        <li><FooterLinks text={obj.linkFive} /></li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-1/3 max-md:w-full max-lg:px-3 max-md:pb-[78px]'>
                        <Description text='Get weekly data — and insights.' myClass='pb-[35px] max-sm:pb-[22px] text-center !text-white !leading-[30px] !font-maisonLight !text-3xl max-sm:!max-w-[255px] mx-auto' />
                        <CustomInput customChange={handleChange} inputId="email" myType="email" myValue={formValue.email} customSubmit={handleSubmit} myPlaceholder="Enter Your Email" text="Get Started" buttonClass="!text-nowrap !text-lemon hover:!text-white" myClass="custom-input" />
                    </div>
                </div>
            </div>
            <div className='max-w-[1351px] mx-auto px-4 pt-20'>
                <div className='flex flex-wrap -mx-3 justify-between items-center'>
                    <div className='w-3/12 px-3 max-md:hidden'>
                        <a href="#logo" className='flex max-w-max'><img src={logo} alt="logo" className='h-14 pointer-events-none'/></a>
                        <p className='font-maisonBook text-[13px] leading-5 text-white max-w-[273px] pt-[22px]'>Venveo is an award-winning digital marketing solutions provider. Since 2003.
                            ©{year} Venveo</p>
                    </div>
                    <div className='w-4/12 max-md:w-full'>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 px-3 max-md:w-full max-md:text-center'>
                                <p className='font-maisonMedium text-xs leading-[13px] text-white pb-[30px] max-md:pb-5'>VISIT</p>
                                <p className='font-maisonBook text-[13px] leading-5 text-white'>100 N Main Street <br />
                                    #201 <br />
                                    Blacksburg, VA 24060</p>
                            </div>
                            <div className='w-1/2 px-3 max-md:w-full max-md:text-center max-md:pt-[71px]'>
                                <p className='font-maisonMedium text-xs leading-[13px] text-white pb-[30px] max-md:pb-5'>CONTACT</p>
                                <a href="mailto:" className='relative font-maisonBook text-[13px] leading-5 hover:text-lemon max-md:mx-auto transition-all duration-300 text-white flex max-w-max md:-mt-1'>info@venveo.com
                                    <div className='absolute border-t border-lemon w-full bottom-0'></div>
                                </a>
                                <a href="tel:" className='relative font-maisonBook text-[13px] leading-5 hover:text-lemon max-md:mx-auto transition-all duration-300 text-white flex max-w-max mt-[22px]'>1 · 800 · 123 · 4567
                                    <div className='absolute border-t border-lemon w-full bottom-0'></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 flex flex-col justify-end items-end px-3 max-md:w-full'>
                        <div className='flex gap-8 max-lg:gap-3 max-md:hidden'>
                            <a href="#rights" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>All Rights Reserved</a>
                            <a href="#privacy-policy" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>Privacy Policy</a>
                        </div>
                        <div className='flex gap-9 max-lg:gap-6 pt-[31px] items-center max-md:mx-auto max-md:pt-16 max-md:pb-[57px] max-md:gap-10'>
                            <a target='blank' href="https://www.facebook.com/" className='group'><FacebookIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.instagram.com/" className='group'><InstagramIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.twitter.com/" className='group'><TwitterIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.linkedin.com/" className='group'><LinkedinIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.youtube.com/" className='group'><YoutubeIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                        </div>
                        <div className='w-3/12 px-3 md:hidden max-md:w-full '>
                            <a href="#logo" className='flex max-w-max mx-auto'><img src={logo} alt="logo" className='h-14 pointer-events-none' /></a>
                            <p className='font-maisonBook text-[13px] leading-5 text-white max-w-[273px] pt-3 pb-[37px] text-center mx-auto'>Venveo is an award-winning digital marketing solutions provider. Since 2003.
                                ©{year} Venveo</p>
                        </div>
                        <div className='flex gap-8 md:hidden w-full justify-center'>
                            <a href="#rights" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>All Rights Reserved</a>
                            <a href="#privacy-policy" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer