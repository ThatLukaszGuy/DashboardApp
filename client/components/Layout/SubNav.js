import React from 'react'
import Link from 'next/link'

export default function SubNav({ currentRoute, icon }) {
  return (
    <div className='flex justify-between text-white p-5 font-bold'>    
        <ul className='flex flex-row '>
            <li>
                <Link href={'/'}>
                    <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-lg hover:bg-gray-400'># Return Home</a>
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <a  className='ml-4 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-lg hover:bg-gray-400'># {currentRoute}</a>
                </Link>
            </li>
        </ul>
        <div className='mr-4 py-1'>
            {icon}
        </div>

    </div>
  )
}
