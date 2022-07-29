import React, { useEffect } from 'react';
import Image from 'next/image'
import header from '../assets/header-title.svg'
import navi from '../assets/butterfly.gif'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  return (
    
    <div className='header-container flex items-center justify-center flex-col'>
      <div className='header-content p-6 flex items-center justify-center m-auto'>
        <Image src={header} data-aos="fade-up"></Image>
      </div>
      <div className='header-navigator flex items-center justify-center w-24'>
        <Image src={navi} width={100} height={100} ></Image>
      </div>
    </div>

  )
}

export default Header