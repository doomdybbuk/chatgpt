import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'> 
      <h1 className='text-5xl font-bold mb-20 cursor-pointer' >GPT-Clone</h1>
      <h1 className='text-5xl font-bold mb-20'>How Can I help you today?</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8'/>
            <h2 className='cursor-pointer'>Capabilites</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText cursor-pointer'>"Explain Something to me"</p>
            <p className='infoText cursor-pointer'>"What is the difference between a cat and a dog"</p>
            <p className='infoText cursor-pointer'>"What is the color of sun"</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8'/>
            <h2 className='cursor-pointer'>Capabilites</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText cursor-pointer'>"Change the ChatGPT model to use "</p>
            <p className='infoText cursor-pointer'>"Messages are stored in Firebase's Firestore"</p>
            <p className='infoText cursor-pointer'>"Hot Toast Notification when ChatGPT is thinking"</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2 className='cursor-pointer'>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText cursor-pointer'>"May occasionally generate incorrect information"</p>
            <p className='infoText cursor-pointer'>"May occasionally generate harmful instructions or biased content"</p>
            <p className='infoText cursor-pointer'>"Limited knowledge of world or event after 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage