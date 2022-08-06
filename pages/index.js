import About from '../components/About/About';
import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import Latest from '../components/Latest/Latest';
import { HeadConfig } from '../components/Layout/HeadConfig';

export default function Home() {






  return (
    <>
      <HeadConfig title={'Dashboard'} color={'#000000'}/>
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
