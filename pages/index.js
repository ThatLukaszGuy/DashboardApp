import About from '../components/About/About';
import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import Latest from '../components/Latest/Latest';
import Head from 'next/head';

export default function Home() {






  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"></meta>
        
        <title>Dashboard</title>
      </Head>
      <div className=''>
        <div className='flex'>  
          <Sidebar />
          <Landing />
        </div>
        <div id='login'> 
          <Login/>
        </div>

        <div id='other'>
          <Latest />
        </div>

        <div id='about'>
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}
