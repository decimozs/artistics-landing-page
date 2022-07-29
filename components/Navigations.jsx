import React, { useEffect } from 'react';
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Navigations = () => {

  useEffect(() => {
    AOS.init({duration: 500})
  }, []);


  return (
    
    <div className='navigations-container p-6 flex justify-end'>
      <Link href="/About">
        <button className='nav-btn px-8 py-2' data-aos="zoom-in">
          <a>about</a>
        </button>
      </Link>
    </div>

  )
}

export default Navigations