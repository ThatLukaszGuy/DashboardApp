import Head from 'next/head'
import React from 'react'
import ExchangeHandler from '../../components/Exchanges/ExchangeHandler'
import { coinGeckoExchange } from '../../components/axios/axios'
import axios from 'axios'

export async function getServerSideProps() {
  const response = await axios.request(coinGeckoExchange);
  return {
    props: {exchanges : JSON.parse(JSON.stringify(response.data))}
  }

}

export default function exchanges({exchanges}) {
  return (
    <>

      <Head>
        <title>Exchanges</title>
      </Head>
      <ExchangeHandler exchanges={exchanges}/>
    </>
  )
}
