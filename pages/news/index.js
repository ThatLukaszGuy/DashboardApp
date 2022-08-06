import React from 'react'
import NewsHandler from '../../components/News/NewsHandler'
import { newsOptions } from '../../components/axios/axios';
import axios from 'axios';
import { HeadConfig } from '../../components/Layout/HeadConfig';

export async function getServerSideProps() {
  const response = await axios.request(newsOptions);
  return {
    props: {news : JSON.parse(JSON.stringify(response.data))}
  }

}


export default function News({news}) {
  return (
    <>
    <HeadConfig title={'News'} color={'#2D3748'}/>
    <NewsHandler news={news}/>

    </>
  )
}
