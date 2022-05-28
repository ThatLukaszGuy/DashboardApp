import React from 'react'
import NewsHandler from '../../components/News/NewsHandler'
import Head from "next/head";

export default function News() {
  return (
    <>
    <Head>
      <title>News</title>
    </Head>
    <NewsHandler />

    </>
  )
}
