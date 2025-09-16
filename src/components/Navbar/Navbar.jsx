import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "../../index.css"

function Navbar() {
    const logoRef = useRef(null);
    return (
        <div className='fixed z-50 right-0 top-0 bg-white/80 text-green-700 w-2xs h-14 '>
            <div className='flex justify-around items-center h-full text-xl tracking-wide text-telugu'>
                <Link to='/contact-us' className='w-full h-full flex items-center justify-center cursor-pointer border-r relative group' >
                    <div className='w-full h-0 bg-green-600 absolute top-0 left-0 transition-all ease-in-out duration-115 group-hover:h-full'></div>
                    <span className='z-10 relative group-hover:text-white'>Contact Us</span>
                </Link>
                <Link to='/' className='w-1/5 h-full flex items-center justify-center cursor-pointer border-r relative group ' onMouseOver={() => {
                    logoRef.current.src = "/images/Navbar/icon-white.png"
                }}
                    onMouseLeave={() => {
                        logoRef.current.src = "/images/Navbar/icon-green.png"
                    }}
                >
                    <div className='w-full h-0 bg-green-600 absolute top-0 left-0 transition-all ease-in-out duration-115 group-hover:h-full'></div>
                    <img src="/images/Navbar/icon-green.png" ref={logoRef} className='w-9 h-9 relative' />
                </Link>

                <div className='w-6 h-full border-r-2 border-green-600'></div>
            </div>
        </div>
    )
}
export default Navbar