import React from 'react'
import { HeadConfig } from '../../components/Layout/HeadConfig';
import GraphHandler from '../../components/Graphs/GraphHandler';


export default function graphs() {
  return (
    <>
      <HeadConfig title={'Graphs'} color={'#2D3748'}/>
      <GraphHandler />
    
    </>
  )
}
