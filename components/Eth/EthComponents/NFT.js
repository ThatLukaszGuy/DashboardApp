import React from 'react'
import { useEffect } from 'react'
import { useNFTBalances } from 'react-moralis'

export default function NFT({user}) {
    

    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
      getNFTBalances({
          params: {
              chain: 'rinkeby',
              address: user.get('ethAddress')
          }
      });



    }, [])

  
  return (
    <div>
        <p> <b>My NFT's: </b></p>
        {data && data.result.map((nft) => (
            <div key={nft.token_uri} className='my-2'>
                {nft.image && <img src={nft.image} alt=''/>}
                <p className='break-words hover:text-pink-700'><a href={nft.token_uri} target='_blank'>{nft.token_uri}</a></p>
            </div>
        ))}

    </div>
  )
}
