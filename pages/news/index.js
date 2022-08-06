import React from 'react'
import NewsHandler from '../../components/News/NewsHandler'
import Head from "next/head";
import { newsOptions } from '../../components/axios/axios';
import axios from 'axios';

export async function getStaticProps() {
  const response = await axios.request(newsOptions);
  return {
    props: {news : JSON.parse(JSON.stringify(response.data))}
  }

}


export default function News({news}) {
  return (
    <>
    <Head>
      <title>News</title>
    </Head>
    <NewsHandler news={news}/>

    </>
  )
}
