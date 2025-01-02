import React, { useState } from 'react'
import { FOOTER_LINK_LIST } from '../utils/helper'
import FooterLinks from '../common/FooterLinks'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import logo from "../assets/images/png/logo.png"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../utils/icons'

const Footer = () => {
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
        <div className='bg-darkGreen pt-[90px] pb-[100px]'>
            <div className='max-w-[1351px] mx-auto px-4'>
                <div className='flex flex-wrap -mx-3'>
                    <div className='w-2/3 px-3'>
                        <div className='flex flex-wrap -mx-3'>
                            {FOOTER_LINK_LIST.map((obj, i) => (
                                <div key={i} className='w-1/4 px-3'>
                                    <ul>
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
                    <div className='w-1/3'>
                        <Description text='Get weekly data — and insights.' myClass='pb-[35px] text-center !text-white !leading-[30px] max-sm:!text-2xl max-sm:!leading-[26px] !font-maisonLight !text-3xl' />
                        <CustomInput customChange={handleChange} inputId="email" myType="email" myValue={formValue.email} customSubmit={handleSubmit} myPlaceholder="Enter Your Email" text="Get Started" buttonClass="!text-nowrap !text-lemon hover:!text-white " />
                    </div>
                </div>
            </div>
            <div className='max-w-[1351px] mx-auto px-4 pt-20'>
                <div className='flex flex-wrap -mx-3 justify-between items-center'>
                    <div className='w-3/12 px-3'>
                        <a href="#logo" className='flex max-w-max'><img src={logo} alt="logo" className='h-14' /></a>
                        <p className='font-maisonBook text-[13px] leading-5 text-white max-w-[273px] pt-[22px]'>Venveo is an award-winning digital marketing solutions provider. Since 2003.
                            ©2023 Venveo</p>
                    </div>
                    <div className='w-4/12'>
                        <div className='flex flex-wrap -mx-3'>
                            <div className='w-1/2 px-3'>
                                <p className='font-maisonMedium text-xs leading-[13px] text-white pb-[30px]'>VISIT</p>
                                <p className='font-maisonBook text-[13px] leading-5 text-white'>100 N Main Street <br />
                                    #201 <br />
                                    Blacksburg, VA 24060</p>
                            </div>
                            <div className='w-1/2 px-3'>
                                <p className='font-maisonMedium text-xs leading-[13px] text-white pb-[30px]'>CONTACT</p>
                                <a href="mailto:" className='relative font-maisonBook text-[13px] leading-5 hover:text-lemon transition-all duration-300 text-white flex max-w-max -mt-1'>info@venveo.com
                                    <div className='absolute border-t border-lemon w-full bottom-0'></div>
                                </a>
                                <a href="tel:" className='relative font-maisonBook text-[13px] leading-5 hover:text-lemon transition-all duration-300 text-white flex max-w-max mt-[18px]'>1 · 800 · 123 · 4567
                                    <div className='absolute border-t border-lemon w-full bottom-0'></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 flex flex-col justify-end items-end px-3'>
                        <div className='flex gap-8'>
                            <a href="#rights" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>All Rights Reserved</a>
                            <a href="#privacy-policy" className='font-maisonMedium text-[13px] leading-5 text-white hover:text-lemon transition-all duration-300'>Privacy Policy</a>
                        </div>
                        <div className='flex gap-9 pt-[31px] items-center'>
                            <a target='blank' href="https://www.facebook.com/" className='group'><FacebookIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.instagram.com/" className='group'><InstagramIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.twitter.com/" className='group'><TwitterIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.linkedin.com/" className='group'><LinkedinIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                            <a target='blank' href="https://www.youtube.com/" className='group'><YoutubeIcon myClass="group-hover:fill-lemon transition-all duration-300" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer