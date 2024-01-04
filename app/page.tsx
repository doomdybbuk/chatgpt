import React from 'react'
import { BeakerIcon } from '@heroicons/react/16/solid'
import { SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'> 
      <h1 className='text-5xl font-bold mb-20 cursor-pointer' >ChatGPT</h1>
      <div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8'/>
            {/* Sun Icon */}
            <h2 className='cursor-pointer'>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText cursor-pointer'>"Explain Something to me"</p>
            <p className='infoText cursor-pointer'>"What is the difference between a cat and a dog"</p>
            <p className='infoText cursor-pointer'>"What is the color of sun"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
// 33.03 minutes resume----