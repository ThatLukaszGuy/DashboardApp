import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { coinGecko } from '../axios/axios'
import AllDataBanner from './AllDataBanner'
import Coins from './Coins'
import { Spinner } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import styles from './AllData.module.css'

export default function AllDataHandler() {
  
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.request(coinGecko)
                setCoins(response.data)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }

        }

        fetchCoins()
    }, [])

    const handleChange = e => {
        setSearch(e.target.value);
      };
    
      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div className='bg-gray-800 '>
            <AllDataBanner />
            <div className='grid grid-cols-1 place-items-center'>
                <label htmlFor='crypto' className='text-white font-thin text-3xl flex'>Search Crypto <BsSearch size={15}/></label>
                <input 
                onChange={handleChange} 
                name='crypto'
                type='search' 
                placeholder='Search'
                className='my-4 w-[300px] focus:ring-pink-700  rounded-md p-2 focus:border-pink-700 focus:outline-none border-2'
                />
            </div>
            <div className='p-6 border-gray-500 rounded-md border-2 mx-2 bg-gray-700'>
                {isLoading 
                    ? 
                    <div className='h-[90vh] bg-gray-700 grid-cols-1 grid place-items-center'>
                        <Spinner 
                            size='xl' 
                            color='pink.500'   
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.800' />
                    </div>
                    : 
                    
                    <div></div> 
                    
                    }
                
                {filteredCoins.map(coin => {
                    return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                    );
                })}
            </div>
        </div>
  )
}
