import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'

export default function Transactions({user}) {
  
    const Web3Api = useMoralisWeb3Api()

    const BASE_URL = 'https://rinkeby.etherscan.io/tx/'
    const [transactions , setTransactions] = useState([])

    const fetchTransactions = async ()=> {
        const data = await Web3Api.account.getTransactions({
            chain: 'rinkeby',
            address: user.get('ethAddress'),
            limit: 5
        })
        if(data) {
            setTransactions(data.result)
        }
    }

    useEffect(() =>{
        fetchTransactions()

    },[])
  
  
  return (
    <div>        
        
        <p> <b>Last 5 Transactions: </b></p>
        {transactions && transactions.map(transaction => (
            <div key={transaction.hash} className='my-2'>
                <a href={`${BASE_URL}${transaction.hash}`} target='_blank' className='break-words hover:underline my-2 hover:text-pink-700'> {transaction.hash} </a>
                <br/>
            </div>
        ))}
    </div>
  )
}
