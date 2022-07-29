import React, { useEffect } from 'react';
import Image from 'next/image'
import bat from '../assets/bat.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Waiting = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (

    <div className='waiting-container flex items-center justify-center'>  
      <div className='waiting-content flex items center justify-start m-auto'>
      <h1 className='waiting-snippets text-5xl text-center' data-aos="zoom-out">
        what are you waiting for?
      </h1>
      </div>
    </div>

  )
}

export default Waiting