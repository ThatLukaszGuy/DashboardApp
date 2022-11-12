import Link from 'next/link'
import React from 'react'
import { HeadConfig } from '../components/Layout/HeadConfig'
// change color of head
const index = () => {
  return (
    <>
        <HeadConfig title={'404'} color={"#202225"}/>
        <div className='bg-404 flex flex-col justify-center items-center'>
            <div className='glass w-[90vw] sm:w-[50vw]  p-5'>
                <h1 className='pixel mt-5 text-7xl text-white'>404</h1>
                <p className=' mt-2 text-pink-700 just-pixel shadow-none'>It seems that the page you requested couldn't be found. Maybe Try Going Home ?</p>
                <Link href={'/'}>
                    <a>
                        <button className="mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 landing-btn shadow mx-3">
                            Go Home
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    </>
  )
}

export default index