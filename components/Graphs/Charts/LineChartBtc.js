import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { coinGeckoHistoryBtc } from '../../axios/axios'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function LineChartBtc() {
  const [chart, setChart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.request(coinGeckoHistoryBtc)
        setChart(response.data.prices)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    }

    fetchHistory()
    
  },[])

  const data = {
    labels: chart.map(i => new Date(i[0]).toLocaleString().split(',') ),
    datasets: [
      {
        label: 'Weekly price in $',
        data: chart.map(i => i[1]),
        backgroundColor: 'rgba(52, 235, 186, 0.5)',
        borderColor: 'rgba(52, 235, 186, 0.5)',
      },
    ],

  }

  const options = {
    maintainAspectRatio: false,
    
  }

  return (
    <div className='max-w-[80vw] relative h-[35vh]'>
      <Line data={data} options={options}/>
    </div>
  )
}
