import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { useMoralisSolanaApi } from "react-moralis"


export default function SolBalance({user}) {

    

    let walletAddress = user.get('solAddress')
    let SolanaAPI = useMoralisSolanaApi()

    let [solanaBalance, setSolanaBalance] = useState('')
    let[isLoading, setIsLoading] = useState(true)

    const toast = useToast()
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await SolanaAPI.account.balance({
                    network: 'devnet',
                    address: walletAddress
                })
                setSolanaBalance(result.solana)
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
    },[])

  return (
    <div>
        <p className="break-words"> <b>Solana balance :</b></p>
        {!isLoading && <p className="break-words text-white">{solanaBalance.slice(0,5)} <span className='text-pink-700'> SOL</span></p>}
    </div>
  )
}
