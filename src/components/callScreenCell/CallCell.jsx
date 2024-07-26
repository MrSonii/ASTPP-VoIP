import React from 'react'

function CallCell({img, text}) {
  return (
    <div className='w-2/6 flex justify-center flex-wrap pb-16 pointer'>
      <img src={img} alt={text} />
      <p className='w-full text-center grey text-xs'>{text}</p>
    </div>
  )
}

export default CallCell