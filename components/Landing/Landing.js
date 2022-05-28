import React from 'react'
import Image from 'next/image'




export default function Landing() {


  return (
    <div className='backroundIMG z-0'>
      <div className='child'>
        <h1 className='text-white z-10  font-bold text-5xl my-3'>Welcome to my <span className='text-pink-700'>Web3</span> Dashboard</h1>
        
        <h4 className='text-gray-400 z-10 font-bold text-2xl '>Check your ETH and SOL balances, nfts, transactions and stay up to date with everything you have to know</h4>

        <div className='my-5'>
        
          <a href='#about'>          
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 border border-gray-400 rounded shadow mx-3">
                More info
            </button>
          </a>  

          <a href='#login'>
            <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold py-4 px-8 border border-pink-800 rounded shadow mx-3 my-2">
            Get started!            
            </button>            

          </a>
          

        </div>

      </div>
    </div>
  )
}
