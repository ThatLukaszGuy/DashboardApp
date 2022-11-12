import React from 'react'

export default function Logout({logout, user}) {
  return (
    <div className='p-7 w-screen bg-gray-600 text-white flex justify-between items-center' >
        
        <button onClick={() => logout().then(window.location.href == '/')} className='bg-gray-800 hover:bg-gray-900 p-3 rounded-md teext-white'>Logout</button>
        <h4 className='font-bold'>{user.getUsername()}</h4>
    </div>
  )
}
