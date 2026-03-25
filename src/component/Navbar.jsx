import React from 'react'
import Logo from '../assets/react.svg'
function Navbar ()  {
  return (
    <div className='flex justify-between  py-4 text-[15px] items-center'>
        <img src={Logo} alt="Logo" className='h-10 w-10  '/>
        <div className='flex gap-40 '>
        <div className=''>Home</div>
        <div className=' '>About</div>
        <div className=' '>Contact</div>
        <div className=''>Services</div>
        </div>
        <button className='bg-black text-white py-3 px-3'>Shop Now</button>
    </div>
  )
}

export default Navbar