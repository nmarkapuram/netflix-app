import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='py-36 w-3/12 w-screen aspect-video text-white bg-linear-to-r from-black absolute pt-[20%] px-26'>
      <h1 className='font-bold text-6xl'> {title}</h1>
      <p className='text-lg w-1/3'> class {overview} </p>
      <div>
        <button className='p-4 border text-black bg-white rounded-lg m-2'>
          {' '}
          Play
        </button>
        <button className='p-4 border text-black bg-white rounded-lg m-2'>
          {' '}
          More Info{' '}
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
