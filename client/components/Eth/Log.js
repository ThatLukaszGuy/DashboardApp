import React from 'react'
import Logout from './EthComponents/Logout'
import TabsEl from './EthComponents/Tabs'
import { useMoralis } from 'react-moralis'
import Tabs from './EthComponents/Tabs';


export default function Log({ user }) {
  
  const { logout, isLoggingOut, setUserData, isUserUpdating } = useMoralis();
  
  return (
    
    <div className='bg-gray-800 min-h-screen bg-image-dashboard'>
      <Logout logout={logout} isLoggingOut={isLoggingOut} user={user}/>  
      

      
        <div className='flex flex-col justify-center items-center'>
          
          <Tabs/>
        </div>

      
    </div>
  )
}
