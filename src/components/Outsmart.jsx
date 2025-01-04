import React, { useState } from 'react'
import Heading from '../common/Heading'
import CustomInput from '../common/CustomInput'
import curlyLine from "../assets/images/webp/curly-line.webp"
import smCurlyLine from "../assets/images/webp/sm-curly-line.webp"

const Outsmart = () => {
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
        <div className='mt-[129px] bg-yellowSection bg-cover bg-no-repeat pt-[60px] pb-20 max-sm:pt-9 max-sm:pb-[45px]'>
            <div className='max-w-[1118px] px-4 mx-auto relative'>
                <div className='flex flex-wrap -mx-3'>
                    <div className='w-1/2 px-3 max-md:w-full'>
                        <p className='font-spaceMono text-[15px] leading-[22px] flex max-md:!justify-center'>Get a free competitive analysis on your market</p>
                        <Heading text='Outsmart your competition' myClass='!font-maisonLight !text-[40px] !leading-[40px] !pt-[7px] !flex max-md:!justify-center !text-start max-lg:!text-4xl max-sm:!text-3xl max-sm:!leading-[32px]' />
                    </div>
                    <div className='w-1/2 px-3 max-md:w-full max-md:pt-[76px]'>
                        <CustomInput myPlaceholder='Enter Your Website' myType='text' text='Analyze' customSubmit={handleSubmit} customChange={handleChange} myValue={formValue.website} inputId='website' myClass='!bg-white my-input' buttonClass='!text-black hover:!text-lemon' inputClass='!text-black' />
                    </div>
                </div>
                <img src={curlyLine} alt="curly-line" className='h-[76px] absolute left-[46%] -bottom-12 max-sm:rotate-45 max-md:hidden' />
                <img src={smCurlyLine} alt="sm-curly-line" className='absolute left-[46%] h-[102px] object-cover bottom-14 md:hidden' />
            </div>
        </div>
    )
}

export default Outsmart