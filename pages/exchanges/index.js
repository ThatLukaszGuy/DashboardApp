import Head from 'next/head'
import React from 'react'
import ExchangeHandler from '../../components/Exchanges/ExchangeHandler'

export default function exchanges() {
  return (
    <>

      <Head>
        <title>Exchanges</title>
      </Head>
      <ExchangeHandler/>
    </>
  )
}
