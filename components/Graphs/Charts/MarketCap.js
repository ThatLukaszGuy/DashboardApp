import React,{ useEffect,useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'
import { coinGecko } from '../../axios/axios'
import { Text } from '@chakra-ui/react'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MarketCap() {
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
  


  const data = {  
  labels: coins.map((i) => i.name).slice(0,6),
  datasets: [
    {
      label: 'Total Volume',
      data: coins.map((i) => i.market_cap).slice(0,6),
      backgroundColor: [
        'rgba(52, 235, 186, 0.2)',
        'rgba(58, 52, 235, 0.2)',
        'rgba(235, 122, 52, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(192, 235, 52, 0.2)',
      ],
      borderColor: [
        'rgba(52, 235, 186,1)',
        'rgba(58, 52, 235, 1)',
        'rgba(235, 122, 52, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(192, 235, 52, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  
}
  
  return (
    <>    
      <div className='max-w-[80vw] '>
        <Doughnut data={data} width={300} height={270} options={options}/>
      </div>
      <Text fontSize={'3xl'} color={'gray.100'} maxW={'80vw'} align={'center'} mt={'2'}>Market Cap</Text>
    </>
  )
}
