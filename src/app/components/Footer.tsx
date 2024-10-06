import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='pb-4 w-full'>
      <div className='w-full bg-[#DF8F24] py-6 rounded-lg'>
        <div className='flex items-center justify-between px-10'>
          <h2>lodo</h2>
          <div>
            <h2 className='text-[#BB6D05] text-[40px] font-extrabold text-center'>Join waitlist</h2>
            <div className='flex space-x-6'>
              <input className='bg-inherit outline-none border-[2px] p-1 w-[300px] rounded-lg border-black'/>
              <button className='bg-[#000000] py-1 px-2'>Join wailtist</button>
            </div>
          </div>

        </div>
        <div className='p-10 text-[26px] flex items-center space-x-10'>
          <BsTwitterX />
          <FaDiscord />
          <FaTelegramPlane />
        </div>
        <div>
          <div className='bg-white w-full text-center'>
            <h2 className='text-black text-[10px] py-1'>© 2024 nectafi, All Rights Reserved.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer