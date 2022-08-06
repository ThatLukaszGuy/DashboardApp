import { HeadConfig } from '../../components/Layout/HeadConfig'
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

      <HeadConfig title={'Exchanges'} color={'#2D3748'}/>
      <ExchangeHandler exchanges={exchanges}/>
    </>
  )
}
