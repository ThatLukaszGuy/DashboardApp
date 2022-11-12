import React from 'react'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'


export default function Profile({user}) {
    const [input, setInput] = useState('')
    const {setUserData, isUserUpdating} = useMoralis()

  return (
    <div>
        <p className='break-words'><b>Username:</b> {user.getUsername()}</p>
        <p className='break-words'><b>Wallet Address:</b> {user.get('ethAddress')}</p>
        <form className="w-full "  onSubmit={e => {
            e.preventDefault()
            if(input.trim !== '') {
                setUserData({
                    username: input
                }).then(() => setInput(''))
            }
        }}>
            <div className="flex items-center border-b border-pink-700 py-2">
                
                <input  id='username' className="  appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ThatUserGuy"  value={input} onChange={e => setInput(e.target.value)} required/>
                
                <button className="flex-shrink-0 bg-pink-700 hover:bg-pink-800 border-pink-700 hover:border-pink-800 text-sm border-4 text-white py-1 px-2 rounded" type="submit" disabled={isUserUpdating}>
                 Update !
                </button>

            </div>
        </form>


    </div>
  )
}
