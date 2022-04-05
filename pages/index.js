import About from '../components/About/About';
import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Home() {






  return (
    <>
      <title>Dashboard</title>
      <div className=''>
        <div className='flex'>  
          <Sidebar />
          <Landing />
        </div>
        <div id='login'> 
          <Login/>
        </div>
        <div id='about'>
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}
