import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';

function Stairs() {
    const stairDiv = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set(stairDiv.current, { opacity: 1, visibility: 'visible' });

        tl.fromTo(".stair",
            { scaleY: 1, transformOrigin: "top" },
            { scaleY: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
        );
        tl.to(stairDiv.current, {
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
            duration: 0.1
        })
    })

    return (
        <div className='w-full h-full z-50 fixed top-0 flex opacity-0 invisible' ref={stairDiv}>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/green-stair.png")]'></div>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/white-stair.png")]'></div>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/green-stair.png")]'></div>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/white-stair.png")]'></div>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/green-stair.png")]'></div>
            <div className='stair w-1/6 h-full bg-[url("/images/stairs/white-stair.png")]'></div>
        </div>
    )
}

export default Stairs