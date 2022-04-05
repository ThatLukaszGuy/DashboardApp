import React from 'react'

import Nav from '../Nav/Nav'

export default function NotLog() {
    
    const refreshPage = () => {
        window.location.reload(false);
      }
  
    return (
    <>
      <title>Logged out</title>
      <div className='bg-gray-700 relative h-screen '>
          <Nav />
          <div className='child '>
              
              

              <object data='/images/logout.svg' className='object'>

              </object>

              <h2 className='text-center mt-10 text-white font-bold font-2xl'>You're Logged out...</h2>
              <div onClick={refreshPage} className='text-center bg-pink-700 hover:bg-pink-800 mt-12 text-white font-bold border border-pink-800 rounded shadow mx-3 my-2 logout-btn'>
                <button onClick={refreshPage} className='text-center py-4  '>Click to retry!</button>
              </div>
          </div>

          
          
      </div>
    </>
  )
}
