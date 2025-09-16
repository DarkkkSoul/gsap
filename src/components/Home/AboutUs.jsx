import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
import ReviewComponent from './ReviewComponent';
import farmerReviews from '../../arrays/reviewArray';
import Stats from './Stats';


function AboutUs() {
   const image = useRef(null);
   const imageDiv = useRef(null);
   const scope = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   const imageArray = [
      '/images/about/1.jpg',
      '/images/about/2.jpg',
      '/images/about/3.jpg',
      '/images/about/4.jpg',
      '/images/about/5.jpg',
      '/images/about/7.jpg',
      '/images/about/8.jpg',
      '/images/about/9.jpg',
      '/images/about/10.jpg',
      '/images/about/11.jpg',
   ]

   const aboutDiv = useRef(null);
   const reviewDiv = useRef(null);
   const impactDiv = useRef(null);

   useGSAP(() => {
      ScrollTrigger.create({
         trigger: imageDiv.current,
         start: 'top top',
         end: '+=300%',
         pin: true,
         scrub: 1,
         onUpdate: (self) => {
            let imageIndex;
            if (self.progress < 1) {
               imageIndex = Math.floor(self.progress * imageArray.length);
            } else {
               imageIndex = imageArray.length - 1;
            }

            // Ensure index is within bounds
            imageIndex = Math.min(imageIndex, imageArray.length - 1);
            image.current.src = imageArray[imageIndex];
         }
      });

      gsap.to(aboutDiv.current, {
         width: "10%",
         duration: 1.5,
         repeat: -1,
         yoyo: true
      })

      gsap.to(reviewDiv.current, {
         width: "10%",
         duration: 1.5,
         repeat: -1,
         yoyo: true
      })

      gsap.to(impactDiv.current, {
         width: "10%",
         duration: 1.5,
         repeat: -1,
         yoyo: true
      })
   })

   return (
      <div className='w-full min-h-[400vh] overflow-hidden'>
         <div className='w-full h-screen flex relative' ref={imageDiv}>

            <div className='w-2/5 flex flex-col justify-around pb-8 pt-6 pl-6 pr-4 bg-green-500/20 about-section'>

               <div className=' flex flex-col gap-y-2 text-green-900 stagger'>
                  <div className='text-2xl tracking-tight font-black relative'>
                     About Us.
                     <div ref={aboutDiv} className='w-[13vh] h-0.5 bg-amber-400 rounded-lg absolute -bottom-0'></div>
                  </div>
                  <div className='text-lg text-lato'>
                     We are a non-profit organization dedicated to <span className='font-extrabold text-emerald-950 drop-shadow-sm drop-shadow-amber-400'>empowering</span> farmers and strengthening rural communities. Our <span className='font-extrabold text-emerald-950 drop-shadow-sm drop-shadow-amber-400'>mission</span> is to provide resources, training, and support that help farmers improve their livelihoods, adopt sustainable practices, and access fair markets, by bridging the gap between <span className='font-extrabold text-emerald-950 drop-shadow-sm drop-shadow-amber-400'>tradition</span> and <span className='font-extrabold text-emerald-950 drop-shadow-sm drop-shadow-amber-400'>technology</span>.
                  </div>
               </div>

               <div className=' flex flex-col gap-y-2 text-green-900 stagger'>
                  <div className='text-2xl tracking-tight font-black relative'>
                     Impacts.
                     <div ref={impactDiv} className='w-[13vh] h-0.5 bg-amber-400 rounded-lg absolute -bottom-0'></div>
                  </div>
                  <Stats />
               </div>

               <div className='flex flex-col gap-y-5 stagger'>
                  <div className='text-2xl text-green-900 font-black relative'>
                     Reviews.
                     <div ref={reviewDiv} className='w-[13vh] h-0.5 bg-amber-400 rounded-lg absolute -bottom-0'></div>
                  </div>
                  <div className='reviews-wrapper'>
                     <div className='reviews-track'>
                        {farmerReviews.map((review, idx) => (
                           <div key={`a-${review.name}-${idx}`} className='mr-3 inline-block'>
                              <ReviewComponent picture={review.picture} name={review.name} place={review.place} review={review.review} />
                           </div>
                        ))}
                     </div>
                     <div className='reviews-track reviews-track--second'>
                        {farmerReviews.map((review, idx) => (
                           <div key={`b-${review.name}-${idx}`} className='mr-3 inline-block'>
                              <ReviewComponent picture={review.picture} name={review.name} place={review.place} review={review.review} />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

            </div>

            <div className='w-3/5 h-full shadow-2xl/80 relative z-10'>
               <img src="/images/about/1.jpg" ref={image} className='w-full h-full object-cover' />
            </div>

         </div>
      </div>
   )
}

export default AboutUs