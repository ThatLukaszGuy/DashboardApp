import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Dashboard</title>
      </Head>
      
      <ChakraProvider>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVERURL} >
            
            <Component {...pageProps} />

        </MoralisProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
