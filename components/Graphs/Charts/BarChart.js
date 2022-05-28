import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { coinGeckoSol } from '../../axios/axios'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  
  const [chart, setChart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSol = async () => {
      try {
        const response = await axios.request(coinGeckoSol)
        setChart(response.data.market_data)
        console.log(response.data.market_data.market_cap.usd)
        console.log(response.data.market_data.total_volume.usd)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    }

    fetchSol()
    
  },[])
  
  const data = {
    labels: ['Market Cap','Total Volume'],
    datasets: [{
        label: '',
        data: [
          chart?.market_cap?.usd,
          chart?.total_volume?.usd

        ],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
}

const options = {
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true
      }
  },
  legend: {
      labels: {
          fontSize: 16
      }
  }
  
}
  
  return (
    <div className='max-h-[100vh] min-h-[70vh] max-w-[90vw] relative'>
      <Bar data={data} options={options} width={300}/>

    </div>
  )
}