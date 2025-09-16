import React from 'react'

function ReviewComponent({ picture, name, place, review }) {
   return (
      <div className="bg-green-900/60 text-white w-[300px] h-[135px] border-2 border-amber-300/70 rounded-lg pt-1 px-2.5 pb-3 flex flex-col gap-y-0.5">
         <div className="flex items-center gap-x-2">
            <div className="w-10 border border-emerald-300 rounded-lg">
               <img src={picture} className="object-cover rounded-lg" />
            </div>
            <div>
               <h2 className="text-sm">{name}</h2>
               <p className="text-xs tracking-tight">{place}</p>
            </div>
         </div>
         <div>
            <p className="text-sm whitespace-normal break-words leading-snug">{review}</p>
         </div>
      </div >
   )
}

export default ReviewComponent