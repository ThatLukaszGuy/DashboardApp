import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import { extendTheme , ChakraProvider } from "@chakra-ui/react"
import { theme } from '../theme/theme'
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
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVERURL} >      
        <ChakraProvider portalZIndex={60}  theme={theme}>
            { pageLoading || firstLoading
                  ? (<Loader />)
                  : <Component {...pageProps} />
                } 
        </ChakraProvider>
      </MoralisProvider>
  )
}

export default MyApp
