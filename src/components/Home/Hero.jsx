import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

function Hero() {
   const rightDiv = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   useGSAP(() => {
      gsap.to(rightDiv.current, {
         scrollTrigger: {
            trigger: rightDiv.current,
            start: "top 9%",
            end: "bottom 15%",
            pin: true
         }
      });

   });
   return (
      <div className='w-full h-screen relative'>

         <img src='https://images.pexels.com/photos/28469559/pexels-photo-28469559.jpeg' className=' inset-0 w-full h-full object-cover absolute' />
         <div ref={rightDiv} className='absolute top-17 right-25 z-10 p-4 text-white text-4xl w-2xl text-right text-bricolage tracking-wide'>
            Farmers are the heart of every harvest, turning the soil with dedication and patience. Their fields are not just land, but a symbol of hope, growth, and life. From sunrise to sunset, they nurture the crops that feed us all, reminding us that every grain carries a story of hard work and care.
         </div>

         <Link to='/join-us' className='absolute bottom-68 left-8 z-10 p-4 text-white text-lg w-2xl text-left underline cursor-pointer text-lato uppercase'>Join Us &gt;</Link>
         <div className='absolute bottom-58 left-8 z-10 p-4 text-white text-3xl w-2xl text-left text-lato'>Fields of hope, roots of life.</div>
      </div>
   )
}

export default Hero