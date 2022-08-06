import React from 'react'
import Head from 'next/head'

export const HeadConfig = ({ title, color }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="DashboardApp for Solana and Ethereum" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content="DashboardApp ETH SOL"/>
      <meta name="author" content="ThatLukaszGuy"/>
      <meta name = "theme-color" content = {color}></meta>
    </Head>
  )
}