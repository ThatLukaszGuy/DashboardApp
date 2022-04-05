import React from 'react'
import Logout from './SolComponents/Logout'
import TabsEl from './SolComponents/Tabs'

export default function LogSol({logout, user, isLoggingOut}) {
  return (
    
    <div className='bg-gray-800 h-screen bg-image-dashboard'>
    <Logout logout={logout} isLoggingOut={isLoggingOut} user={user}/>  
    

    
      <div className='flex flex-col justify-center items-center'>
        
        <TabsEl />
      </div>

    
  </div>
  )
}
