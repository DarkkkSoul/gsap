import React, { useRef } from 'react'
import MentorCard from './MentorCard'
import JoinUsForm from './JoinUsForm'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import mentors from '../../arrays/mentor'

export default function JoinHero() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".join-section",
                start: "top 30%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".stagger", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
            stagger: {
                amount: 0.6,
            }
        });
    });

    const mentorRef = useRef(null);

    useGSAP(() => {
        gsap.to(mentorRef.current, {
            scrollTrigger: {
                trigger: mentorRef.current,
                pin: true,
            },
        });
    });

    return (
        <div className='w-full h-screen flex'>
            <div className='w-3/5 bg-green-500/20 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-xl p-10 md:p-12 flex flex-col items-start justify-center gap-6 join-section'>
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-green-800 stagger">Lead us a Hand</div>
                <div className='mt-2 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl stagger'>
                    Join our <span className='font-bold text-green-800'>NGO</span> if you are an expert in agriculture and want to make a better world for the farmer. Contributions helps farmers get access to training, resources, and fair markets. Every small step you take makes a big difference in their lives.
                </div>
                <div className='w-full max-w-md mt-6 stagger stagger'>
                    <JoinUsForm />
                </div>
            </div>

            <div className='w-2/5 bg-yellow-500/20 flex flex-col' >
                <div className='text-3xl font-extrabold tracking-tight text-yellow-800'>
                    Meet Our Mentors.
                </div>
                <div className='h-[80vh] w-full relative' ref={mentorRef}>
                    {
                        mentors.map((mentor, index) => (
                            <MentorCard key={mentor.name} id={index} name={mentor.name} designation={mentor.designation} experience={mentor.experience} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}