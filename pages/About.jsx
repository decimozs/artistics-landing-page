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
    
    <div className='about-container m-auto flex items-center justify-center '  >
      <div className='about-content flex items-center justify-center w-full max-w-2xl flex-col gap-12 m-auto'>
        <Image src={logo} data-aos="zoom-in" ></Image>
        <div className='about-snippets flex items-center justify-center flex-row gap-4 w-full'>
        <p className='text-lg text-center' data-aos="zoom-in">This platform is a minimalist pixel-related website that contains gif tools and formats. This project is for educational purposes only.</p>
        </div>
      </div>
      <Link href="/">
      <button className='about-btn rounded-full bg-black absolute top-5 right-5'>
      <a className='text-white text-5xl'>X</a>
      </button>
      </Link>
      <div className='pandax absolute bottom-5 left-5'>
      <Image src={panda} width={250} height={200} ></Image>
      </div>
    </div>

  )
}

export default About