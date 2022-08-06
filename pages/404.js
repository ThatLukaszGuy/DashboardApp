import Link from 'next/link'
import React from 'react'
import { HeadConfig } from '../components/Layout/HeadConfig'
// change color of head
const index = () => {
  return (
    <>
        <HeadConfig title={'404'} color={"#202225"}/>
        <div className='bg-gray-900 py-5 min-h-screen flex flex-col  flex-wrap  items-center justify-center'>
            <div className='mx-4'>
                <div>
                    <img src='images/notfound.svg' alt='404'/>
                </div>
                <div className='mt-7 text-white flex justify-center flex-col flex-wrap'>
                    <h3 className=' text-center text-white font-semibold text-xl'>Seems like this page doesn't exist or has been moved</h3>
                    <Link href={'/'}>
                        <a className='text-center text-white mt-5 py-3 bg-pink-700 transition ease-in-out rounded-lg hover:bg-pink-800 '>
                            Return Home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default index