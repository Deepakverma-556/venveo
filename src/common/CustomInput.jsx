import React from 'react'

const CustomInput = ({customSubmit, myId, myClass, inputClass, buttonClass, customChange, myValue, inputId, myPlaceholder, myType, text }) => {
  return (
    <form onSubmit={customSubmit} id={myId} className={`flex items-center border-2 rounded-[50px] border-white  pr-[37.95px] relative mx-auto max-w-[448px] max-sm:px-6 ${myClass} `}>
      <input required onChange={customChange} value={myValue} id={inputId} type={myType} placeholder={myPlaceholder} className={` ${inputClass} bg-transparent w-full h-full py-[22px] sm:pl-[34.27px] max-sm:py-[22px] outline-none font-maisonBook text-[15px] leading-5 text-white`} />
      <button className={`${buttonClass} font-maisonDemi text-[15px] leading-5 text-white hover:text-lemon transition-all duration-300`}>{text}</button>
    </form>
  )
}

export default CustomInput