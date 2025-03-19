import React from 'react'

const Buttons = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
      backgroundColor ? 
        `${backgroundColor} ${textColor} ${borderColor ? borderColor : ''}`
        : 
        'bg-coral-red text-white border-coral-red'
    } rounded-full`}>
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5'/>}
      {/* only renders button img when there is an iconURL */}
    </button>
  )
}

export default Buttons