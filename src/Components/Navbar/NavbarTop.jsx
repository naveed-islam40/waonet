import React from 'react'
import { FaPhoneAlt, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"
import { CiMail } from "react-icons/ci"

const NavbarTop = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-3 bg-gray-100'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto'>
        <div className='flex justify-center items-center gap-2'>
          <FaPhoneAlt className='text-[#666ed3]' />
          <a href="tel:03010771731" className='text-sm hover:underline'>03010771731</a>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <CiMail className='text-[#666ed3]' />
          <a href="mailto:naveedislam20ni@gmail.com" className='text-sm hover:underline'>naveedislam20ni@gmail.com</a>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 w-full sm:w-auto'>
        <div className='text-[#35396D] font-semibold text-sm'>
          Follow our social media:
        </div>
        <div className='flex justify-center items-center gap-4'>
          <a href="#" aria-label="Facebook" className='text-[#666ed3] hover:text-[#35396D] transition-colors'>
            <FaFacebook className='w-5 h-5'/>
          </a>
          <a href="#" aria-label="Instagram" className='text-[#666ed3] hover:text-[#35396D] transition-colors'>
            <FaInstagram className='w-5 h-5'/>
          </a>
          <a href="#" aria-label="Google" className='text-[#666ed3] hover:text-[#35396D] transition-colors'>
            <FaGoogle className='w-5 h-5'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop