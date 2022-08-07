import React from 'react'
import Logout from './EthComponents/Logout'
import TabsEl from './EthComponents/Tabs'



export default function Log({logout, user, isLoggingOut}) {
  return (
    
    <div className='bg-gray-800 min-h-screen bg-image-dashboard'>
      <Logout logout={logout} isLoggingOut={isLoggingOut} user={user}/>  
      

      
        <div className='flex flex-col justify-center items-center'>
          
          <TabsEl />
        </div>

      
    </div>
  )
}
