import React from 'react'

function DegitCell({digit, alpha, setCallerInuput}) {
  return (
    <span className='w-2/6 h-full flex justify-center pb-6'>
      <span className='rounded-full bg-[#797979a1] w-20	h-20 flex justify-center items-center content-center flex-wrap pointer' onClick={() => setCallerInuput(prev => prev+digit)}>
        <p className='p-0 w-full text-center m-0 text-zinc-300 text-4xl'>{digit}</p>
        <small className='p-0 m-0 text-zinc-300 uppercase text-xs'>{alpha}</small>
      </span>
    </span>
  )
}

export default DegitCell