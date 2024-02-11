import Image from 'next/image'
import logo from '../assets/about-title.svg'
import panda from '../assets/panda.gif'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    AOS.init({duration: 3000})
  }, []);

  return (
    <div className='about-container m-auto flex items-center justify-center'>
      <div className='about-content flex items-center justify-center w-full max-w-2xl flex-col gap-12 m-auto'>
        {/* Add alt attribute here */}
        <Image src={logo} alt="About Title" data-aos="zoom-in" />
        <div className='about-snippets flex items-center justify-center flex-row gap-4 w-full'>
          <p className='text-lg text-center' data-aos="zoom-in">Los Angeles based Experimental Artist puraumi.</p>
        </div>
      </div>
      <Link href="/">
        <button className='about-btn rounded-full bg-black absolute top-5 right-5'>
          <a className='text-white text-5xl'>X</a>
        </button>
      </Link>
      <div className='pandax absolute bottom-5 left-5'>
        {/* Add alt attribute here */}
        <Image src={panda} width={250} height={200} alt="Panda Animation" />
      </div>
    </div>
  );
}

export default About