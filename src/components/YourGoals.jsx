import React from 'react'
import CustomButton from '../common/CustomButton'
import Description from '../common/Description'

const YourGoals = () => {
    return (
        <div className='bg-goals bg-cover bg-center'>
            <div className='max-w-[752px] mx-auto px-4 py-[66px] max-sm:pt-14 max-sm:pb-[54px] flex items-center gap-9 max-sm:gap-[29px] justify-between max-sm:flex-wrap'>
                <Description text="Ready to hit your goals?" myClass="!font-maisonLight !text-[40px] !leading-[40px] !text-white max-sm:!text-3xl max-sm:!leading-[30px] max-sm:!max-w-[231px] max-sm:!mx-auto !text-center" />
                <CustomButton text='Book a Strategy Call' myClass='py-[31px] px-[32.7px] max-sm:mx-auto max-sm:w-full justify-center max-sm:py-[32.5px]' />
            </div>
        </div>
    )
}

export default YourGoals