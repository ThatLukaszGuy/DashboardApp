import React from 'react'
import { useEffect,useRef } from 'react'
import { useNFTBalances } from 'react-moralis'
import { Button,Spinner,useDisclosure, 
  Badge,
  Divider,
  UnorderedList,
  ListItem,
  Box,
  Avatar,
  Stack,
  Text,
  Heading,
  List,
  ListIcon,
  Icon,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, } from '@chakra-ui/react'
import { NFTDetails } from './NFTDetails'

export default function NFT({user}) {
    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
      getNFTBalances({
          params: {
              chain: 'goerli',
              address: user.get('ethAddress')
          }
      });



    }, [])


      

     


//<NFTDetails uri={renderNFT(nft.image, true)} nft={nft} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
  return (
    <div>
        <p> <b>My NFT's: </b></p>
        {!data ? <div className='text-center'> <Spinner color='tailwindPink.500' /> </div> : ''}
        
        {data && data.result.map((nft) => (
            <NFTDetails key={nft.token_uri} nft={nft}/>
        ))}
        
    </div>
  )
}
