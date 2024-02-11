import React, { useEffect } from 'react';
import ft1 from '../assets/1st.gif'
import ft2 from '../assets/2nd.gif'
import ft3 from '../assets/3rd.gif'
import ft4 from '../assets/4th.gif'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {

  useEffect(() => {
    AOS.init({duration: 2400})
  }, []);


  return (
    <div className='features-container flex items-center justify-center flex-col'>
      {/* ...other code... */}

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          {/* Add the alt attribute here */}
          <Image src={ft1} alt="First Feature Description" className="logo" data-aos="zoom-in" />
        </div>
        {/* ...other code... */}
      </div>

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row-reverse md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          {/* Add the alt attribute here */}
          <Image src={ft2} alt="Second Feature Description" className="logo" data-aos="zoom-in" />
        </div>
        {/* ...other code... */}
      </div>

      {/* ...other code... */}

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          {/* Add the alt attribute here */}
          <Image src={ft3} alt="Third Feature Description" className="logo" data-aos="zoom-in" />
        </div>
        {/* ...other code... */}
      </div>

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row-reverse md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          {/* Add the alt attribute here */}
          <Image src={ft4} alt="Fourth Feature Description" className="logo" data-aos="zoom-in" />
        </div>
        {/* ...other code... */}
      </div>

    </div>
  );
};

export default Features