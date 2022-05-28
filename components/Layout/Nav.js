import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
        <ul className="flex p-7 w-100 bg-gray-600 justify-between">
            <li className="mr-6 bg-gray-800 hover:bg-gray-900 p-3 rounded-md text-center align-middle justify-center">
                <Link href={'/'}>    
                    <a className="text-white  p-3 text-bold" href="#">Return Home</a>
                </Link>
            </li>

            <li>
                
                <img src='https://lh3.googleusercontent.com/9BRc5VY8ToBcOKKntkaFEcRHJ11XvolhSqrBACTqEPYT9YZPQzOijkTH1uWI9BwutoxefHFMWfcQ_k6KubJZLSUthISs9xThuShRuHySgCPDd-uXTwOKRDdcjdfW3a5wnVBxayxi' className='rounded-md h-11' />
            </li>

        </ul>

    </div>
  )
}
