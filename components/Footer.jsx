import React from 'react'
import Image from 'next/image'
import retro from '../assets/footer.svg'
import tech1 from '../assets/nextjs.png'
import tech2 from '../assets/react.png'
import tech3 from '../assets/tailwind.png'
import tech4 from '../assets/sass.png'

const Footer = () => {
  return (
    
    <div className='footer-container'>
      <div className='footer-content flex items-center justify-center flex-col  py-2 px-4 md:flex-row md:gap-12'>
        <Image src={retro}></Image>
        <p className='md:text-2xl'>est 2022</p>
      </div>
      <div className='tech-used bg-black px-4 flex items-center justify-center flex-row py-4 gap-4'>
      <p className='footer-snippets'>made with</p>
      <Image src={tech1} width={40} height={40} ></Image>
      <Image src={tech2} width={40} height={40} ></Image>
      <Image src={tech3} width={40} height={40} ></Image>
      <Image src={tech4} width={40} height={40} ></Image>
      </div>
      <div className='devs p-2'>
      <p className='text-center'>design and built by Marlon Martin</p>
      </div>
    </div>

  )
}

export default Footer
