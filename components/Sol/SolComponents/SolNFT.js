import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { useMoralisSolanaApi } from "react-moralis"

export default function SolNFT({user}) {

    let walletAddress = user.get('solAddress')
    let SolanaAPI = useMoralisSolanaApi()


    let[nftAmount, setNftAmount] = useState([])

    let[isLoading, setIsLoading] = useState(true)

    const toast = useToast()

    useEffect(() => {
        const fetchData = async () => {


            try {
                let result = await SolanaAPI.account.getNFTs({
                    network: 'devnet',
                    address: walletAddress
                })
                setNftAmount(result)
                console.log(result)
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
        <p className=""><b>Nfts :</b> <span className='text-pink-700'> {!isLoading ? nftAmount.length : ''} </span>  </p>
        <ul className="break-words">
            {nftAmount.length > 0 && !isLoading && !isLoading && nftAmount.map((nft, i) => (
                
                <li key={i}>{nft.mint} {nft.amount}</li>
            ))}
        </ul>
    </div>
  )
}
