import React from 'react'
import AllDataHandler from '../../components/AllData/AllDataHandler'
import styles from '../../components/AllData/AllData.module.css'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { coinGecko } from '../../components/axios/axios'
import axios from 'axios'

export async function getServerSideProps() {
  const response = await axios.request(coinGecko);
  return {
    props: {coinData : JSON.parse(JSON.stringify(response.data))}
  }

}


export default function alldata({ coinData }) {
  return (
    <>
    
    <HeadConfig title={'All Data'} color={'#2f3136'}/>

    <div className={styles.pSetting}>

      <AllDataHandler coins={coinData}/>
    </div>  
    
    </>
  
  )
}
