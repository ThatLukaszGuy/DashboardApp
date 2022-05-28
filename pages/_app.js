import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"></meta>
        
        <title>Dashboard</title>
      </Head>
      
      <ChakraProvider portalZIndex={40}>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVERURL} >
            
            <Component {...pageProps} />

        </MoralisProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
