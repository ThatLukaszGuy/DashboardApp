import React from 'react'
import AllDataHandler from '../../components/AllData/AllDataHandler'
import styles from '../../components/AllData/AllData.module.css'
import Head from 'next/head'

export default function alldata() {
  return (
    <>
    
    <Head>
      <title>All Data</title>
    </Head>

    <div className={styles.pSetting}>

      <AllDataHandler />
    </div>  
    
    </>
  
  )
}
