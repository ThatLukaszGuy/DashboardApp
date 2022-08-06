import React from 'react'
import AllDataHandler from '../../components/AllData/AllDataHandler'
import styles from '../../components/AllData/AllData.module.css'
import Head from 'next/head'
import { coinGecko } from '../../components/axios/axios'
import axios from 'axios'

export async function getStaticProps() {
  const response = await axios.request(coinGecko);
  return {
    props: {coinData : JSON.parse(JSON.stringify(response.data))}
  }

}


export default function alldata({ coinData }) {
  return (
    <>
    
    <Head>
      <title>All Data</title>
    </Head>

    <div className={styles.pSetting}>

      <AllDataHandler coins={coinData}/>
    </div>  
    
    </>
  
  )
}
