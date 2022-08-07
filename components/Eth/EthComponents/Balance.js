import React from 'react'
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis'
import { useEffect } from 'react'
import { useState } from 'react'
import Moralis from 'moralis'
import Details from './Details'
import { Spinner } from '@chakra-ui/react'

export default function Balance({user}) {

    const Web3Api = useMoralisWeb3Api()
    const {fetchERC20Balances, data} = useERC20Balances()
    const [ethBalance, setEthBalance] = useState('')
    const [ethData, setEthData] = useState()


    const fetchNativeBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: 'rinkeby',
            address: user.get('ethAddress')
        }).catch(e => console.log(e))
        
        
        if(result.balance) {
            setEthBalance(Moralis.Units.FromWei(result.balance))
            setEthData(result)
            console.log(ethData)
        }
    }

    useEffect(() => {
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: 'rinkeby',
                address: user.get('ethAddress')
            }
        })
    }, [])


  return (
    <div>
        My <b>ERC20</b> Tokens:
        <br/>
        <p className='mt-2'> <b>Native Token: </b> </p>
        {ethBalance && <div className='flex items-center justify-between mb-1'>
            <p>{ethBalance} <b>ETH</b> </p>
            </div>
            }
        <b> Other Tokens:</b>
        {!data ? <div className='text-center'> <Spinner color='tailwindPink.500' /> </div> : ''}
        {data && data.map(token => (
                
                <div key={token.symbol} className='flex items-center justify-between my-1'>
                    
                    <p >{Moralis.Units.FromWei(token.balance)}  <b>{token.symbol}</b>  </p>
                    <Details address={token.token_address} decimals={token.decimals} name={token.name} /> 
                    
                    
                </div>

            
        ))}

    </div>
  )
}
