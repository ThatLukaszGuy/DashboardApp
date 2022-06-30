import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head";
import { Loader } from '../components/Layout/Loader'
import {useRouter} from 'next/router'
import { useState,useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };
    setFirstLoading(false)

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router])
  
  
  
  
  
  return (
    
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"></meta>
        
        <title>Dashboard</title>
      </Head>
      
      <ChakraProvider portalZIndex={40}>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVERURL} >
        { pageLoading || firstLoading
            ? (<Loader />)
            : <Component {...pageProps} />
          }
        </MoralisProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
