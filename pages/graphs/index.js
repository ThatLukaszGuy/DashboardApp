import React from 'react'
import Head from "next/head";
import GraphHandler from '../../components/Graphs/GraphHandler';


export default function graphs() {
  return (
    <>
      <Head>
        <title>Graphs</title>
      </Head>    
      <GraphHandler />
    
    </>
  )
}
