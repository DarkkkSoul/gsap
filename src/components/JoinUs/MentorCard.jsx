import React from 'react'

function MentorCard({ id }) {
    return (
        <div className={`h-full w-full flex flex-col items-center justify-center absolute mt-1`}
            style={{ top: `${id * 20}px`, zIndex: 10 - id }}>
            <div className='w-1/2 h-[15%] bg-green-300 flex flex-col p-3 rounded-t-2xl'>
                <div>Name</div>
                <div>Designation</div>
                <div>Experience</div>
            </div>
            <div className='w-1/2 h-[60%] p-2 bg-red-300 rounded-b-2xl'>
                <img src="https://images.pexels.com/photos/13513473/pexels-photo-13513473.jpeg" className='rounded-xl w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default MentorCard