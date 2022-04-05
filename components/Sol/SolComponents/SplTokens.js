import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { useMoralisSolanaApi } from "react-moralis"
import Details from './Details'


export default function SplTokens({user}) {
    let walletAddress = user.get('solAddress')
    let SolanaAPI = useMoralisSolanaApi()

    let[splBalance, setSplBalance] = useState([])
    
    let[isLoading, setIsLoading] = useState(true)
    
    const toast = useToast()

    useEffect(() => {
        const fetchData = async () => {

            try {
                let result = await SolanaAPI.account.getSPL({
                    network: 'devnet',
                    address: walletAddress
                })
                setSplBalance(result)
            } catch (error) {
                toast({
                    title: 'Couldn\'t load data , try again later',
                    description:  error,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                })
            }

            setIsLoading(false)
        }

        fetchData()


    }, [])
    return (
    <div>
        <p className="break-words"><b>Spl tokens : <span className='text-pink-700'>{!isLoading ? splBalance.length : ''} </span> </b></p> 
            <ul className="">
                {splBalance.length > 0 && !isLoading && splBalance.map((spl, i) => (
                    <li className='flex items-center justify-between my-1' key={i}>{spl.mint.slice(0,12)}...  {''} {spl.amount} 
                    <Details 
                        ata={spl.associatedTokenAddress} 
                        decimals={spl.decimals} 
                        amount={spl.amount} 
                        mint={spl.mint}

                    
                    />
                    </li>
                ))}
            </ul>     

    </div>
  )
}
