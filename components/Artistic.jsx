import React, { useEffect } from 'react';
import Image from 'next/image'
import artistic from '../assets/artistics.svg'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Artistic = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);


  return (
    <div className='artistic-container flex items-center justify-center m-auto'>
      <div className='artistic-content p-8 flex items-center flex-col justify-center gap-5 m-auto'>
        {/* Add the alt prop here */}
        <Image src={artistic} alt="Artistic Work Description" data-aos="fade-up" />
        <div className='artistic-snippets'>
          <p className='' data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan eget nulla sed malesuada. Cras pretium mollis eros, id feugiat massa consectetur nec. Curabitur blandit, urna eget lacinia pulvinar, mauris mi pretium ex, a bibendum velit purus vestibulum ante. Morbi scelerisque varius diam, eget consectetur lectus.</p>
        </div>
      </div>
    </div>
  );
};

export default Artistic