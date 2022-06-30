import React from 'react'
import { RingLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-1 place-items-center bg-gray-700'>
        <div className=''>
            <RingLoader color='#be185d'  radius={2}/>
        </div>
    </div>
  )
}
