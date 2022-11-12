import React from 'react'
import { FaDatabase, FaPaperPlane} from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'
import Link from 'next/link'


export default function LatestContent() {
  return (
    <div className='grid sm:grid-cols-2 gap-4  grid-cols-1 mt-10 sm:mt-20 z-0'>
        
        <div className="p-6 max-w-sm  rounded-lg border z-0 shadow-md bg-zinc-800 border-zinc-700 sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none">
            <Link href={'/news'}>
                <a  className='flex'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Check latest News on the web</h5>
                    <div className="mb-2 text-2xl font-bold tracking-tight text-white ml-1 mt-1">
                        <FaPaperPlane />
                    </div>
                </a>
            </Link>
            <p className="mb-3 font-normal text-gray-400">Latest news regarding cryptocurrencies</p>
            <Link href={'/news'}>
                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 ">
                    See more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </Link>
        </div>

        <div className="p-6 max-w-sm  rounded-lg border z-0 shadow-md bg-zinc-800 border-zinc-700 sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none">
            <Link href={'/graphs'}>
                <a className='flex'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Check latest Graphs & Charts</h5>
                    <div className="mb-2 text-2xl font-bold tracking-tight text-white ml-1 mt-1">
                        <BsGraphUp />
                    </div>
                </a>
            </Link>
            <p className="mb-3 font-normal text-gray-400">Latest graphs & charts regarding cryptocurrencies</p>
            <Link href={'/graphs'}>
                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 ">
                    See more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </Link>
        </div>

        <div className="p-6 max-w-sm  rounded-lg border z-0 shadow-md bg-zinc-800 border-zinc-700 sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none">
        <Link href={'/alldata'}>
                <a  className='flex justify-between'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Check all data </h5>
                    <div className="mb-2 text-2xl font-bold tracking-tight text-white ml-1 mt-1">
                        <FaDatabase />
                    </div>
                </a>
        </Link>
            <p className="mb-3 font-normal text-gray-400">Check latest all around data regarding a specific coin</p>
            <Link href={'/alldata'}>
                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 ">
                    See more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </Link>
        </div>

        <div className="p-6 max-w-sm  rounded-lg border z-0 shadow-md bg-zinc-800 border-zinc-700 sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none">
            <Link href={'/exchanges'}>
                <a className='flex justify-between'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Check available exchanges</h5>
                    <div className="mb-2 text-2xl font-bold tracking-tight text-white ml-1 mt-1">
                        <GiMoneyStack />
                    </div>
                </a>
            </Link>
            <p className="mb-3 font-normal text-gray-400">Check the most popular and trusted exchanges available</p>
            <Link href={'/exchanges'}>
                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 ">
                    See more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </Link>
        </div>



    </div>
  )
}
