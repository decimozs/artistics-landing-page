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
      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          <Image src={ft1} className="logo" data-aos="zoom-in"></Image>
        </div>
        <div className='features-snippets1 bg-[#b7b2f7]'  data-aos="fade-left">
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Curabitur blandit, urna eget lacinia pulvinar, mauris mi pretium ex, a bibendum velit purus vestibulum ante. Morbi scelerisque varius diam, eget consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Lorem ipsum dolor sit amett.</p>
        </div>
      </div>

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row-reverse md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          <Image src={ft2} className="logo" data-aos="zoom-in"></Image>
        </div>
        <div className='features-snippets1 bg-[#9A9C2F]'  data-aos="fade-right">
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Curabitur blandit, urna eget lacinia pulvinar, mauris mi pretium ex, a bibendum velit purus vestibulum ante. Morbi scelerisque varius diam, eget consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Lorem ipsum dolor sit amett.</p>
        </div>
      </div>

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          <Image src={ft3} className="logo" data-aos="zoom-in"></Image>
        </div>
        <div className='features-snippets1 bg-[#7376C3]'  data-aos="fade-left">
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Curabitur blandit, urna eget lacinia pulvinar, mauris mi pretium ex, a bibendum velit purus vestibulum ante. Morbi scelerisque varius diam, eget consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Lorem ipsum dolor sit amett.</p>
        </div>
      </div>

      <div className='features-content flex items-center justify-center flex-col gap-0 md:flex-row-reverse md:p-8 lg:p-0 lg:h-[100vh]'>
        <div className='features flex items-center justify-center'>
          <Image src={ft4} className="logo" data-aos="zoom-in"></Image>
        </div>
        <div className='features-snippets1 bg-[#ff3c00]'  data-aos="fade-right">
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Curabitur blandit, urna eget lacinia pulvinar, mauris mi pretium ex, a bibendum velit purus vestibulum ante. Morbi scelerisque varius diam, eget consectetur lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Lorem ipsum dolor sit amett.</p>
        </div>
      </div>

    </div>

  )
}

export default Features