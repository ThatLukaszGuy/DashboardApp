import React from 'react'
import { Stat, StatArrow } from '@chakra-ui/react'


export default function Coins({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className='flex justify-between my-4 text-white bg-gray-900 rounded-md p-4  flex-col md:flex-row md:text-left text-center lg:hover:scale-[1.02] md:hover:scale-[1.04] hover:z-50 ease-in-out duration-300 hover:transform-none hover:border-pink-700 border-transparent border-2 border-gray-600 shadow-lg hover:shadow-2xl'>
      <div className='flex break-words  md:justify-start justify-center'>
        <img src={image} alt='crypto' style={{ width: '30px', height:'30px' }} />
          <h1 className='ml-2'>{name}</h1>
          <p className='ml-2 coin-symbol'>{symbol}</p>
      </div>
       
      <div className='flex break-words   md:justify-start justify-center'>
          <p className='coin-price mx-2'>${price}</p>
          <p className='coin-volume mx-2 truncate' >${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='text-red-400 mx-2 flex '><Stat><StatArrow type='decrease'/></Stat> {priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-green-400 mx-2 flex'><Stat><StatArrow type='increase'/></Stat> {priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap break-words truncate'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>

      </div>
      
      
    </div>
  )
}
