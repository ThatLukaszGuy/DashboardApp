import React from 'react'
import { Authenticate } from '../Auth/Authenticate';
import { HeadConfig } from '../Layout/HeadConfig';
import Nav from '../Layout/Nav'

export default function NotLog() {
    
    const refreshPage = () => {
        window.location.reload(false);
      }
  
    return (
    <>
      <HeadConfig title={'Logged Out'} color={'#4f545c'}/>
      <div className='bg-gray-700 relative h-screen '>
          <Nav />
          <div className='child '>
              
              

              <object data='/images/logout.svg' className='object'>

              </object>

              <h2 className='text-center mt-10 text-white font-bold font-2xl'>You're Logged out...</h2>
              <div className='text-center  mt-12 text-white font-bold mx-3 my-2 logout-btn'>
                <Authenticate text={'Log in Again'}/>
              </div>
          </div>

          
          
      </div>
    </>
  )
}
