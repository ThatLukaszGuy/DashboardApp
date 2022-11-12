import React,{ useEffect,useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'
import { coinGecko } from '../../axios/axios'
import { Text } from '@chakra-ui/react'

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Volume() {
  
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
      data: coins.map((i) => i.total_volume).slice(0,6),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
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
      <div className='max-w-[  |80vw] ' style={{width: '99%', height: "85%"}}>
        <Doughnut data={data} width={300} height={270} options={options}/>
      </div>
      <Text fontSize={'3xl'} color={'gray.100'} maxW={'80vw'} align={'center'} mt={'1'}>Total Volume</Text>
    </>
  )
}
