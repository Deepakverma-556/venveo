import React from 'react'
import Description from '../common/Description'
import Heading from '../common/Heading'
import redLine from '../assets/images/webp/red-line.webp'

const SatisfiedClients = () => {
  return (
      <div className='pt-[217px]'>
          <Description text='Driving digital revenue for over' myClass='text-center !leading-[30px] !font-light !text-3xl pb-[7px]' />
          <Heading secondText='SATISFIED CLIENTS.' spanText='1,400+' image={redLine} myAlt='red-ine' imgClass='h-3 w-[119px] !-translate-x-[85px] bottom-0' />
    </div>
  )
}

export default SatisfiedClients