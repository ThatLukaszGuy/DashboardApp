import React from 'react'
import { Button,Spinner,useDisclosure, 
  Badge,
  Divider,
  UnorderedList,
  ListItem,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
 } from '@chakra-ui/react'

export const NFTDetails = ({ nft }) => {
  console.log(nft)
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const renderNFT = (imgURI, returnText=false) => {
    const arr = imgURI.split('/ipfs/ipfs');
    const newURI = `${arr[0]}/ipfs${arr[1]}`
    if (returnText) {
      return newURI
    } else {
      return (
        <div>
          <img src={newURI} alt='nft' className='rounded-md'/>
        </div>
      )
    }  
  }
  return (
   
        <>
            <div key={nft.token_uri} className='my-4  py-5'>
                {renderNFT(nft.image)}
                <div className='flex justify-between'>
                  <p className='my-3 break-words  font-semibold'>{nft.metadata.name} - {nft.name} <Badge ml={2} fontSize='sm' variant='subtle' mb={1} colorScheme='pink'>{nft.symbol}</Badge></p>
                  <p className='my-3 break-words  font-semibold'>{nft.contract_type}</p>
                </div>

                
                <Button colorScheme={'tailwindPink'} onClick={onOpen}> Show Details </Button>
            </div>

            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'lg'}

            >
                <DrawerOverlay />
                <DrawerContent background='customGray.900' >
                  <DrawerCloseButton color='gray.100' />
                  <DrawerHeader color='gray.100'>Details</DrawerHeader>

                  <DrawerBody>
                    <Text fontSize='2xl' color='white'>
                        Overall
                    </Text>
                    <Divider mb={1}/>
                    <UnorderedList color='white' fontSize='sm'>
                      <ListItem>Name: {nft.name}</ListItem>
                      <ListItem>Block number: {nft.block_number}</ListItem>
                      <ListItem>Block number minted: {nft.block_number_minted}</ListItem>
                      <ListItem>Amount: {nft.amount}</ListItem>
                      <ListItem>Contract type: {nft.contract_type}</ListItem>
                      <ListItem>Symbol: <Badge fontSize='xs' variant='subtle' mb={1} colorScheme='pink'>{nft.symbol}</Badge></ListItem>
                    </UnorderedList>

                    <Text fontSize='2xl' color='white' mt={2}>
                        MetaData
                    </Text>
                    <Divider mb={1}/>
                    <UnorderedList color='white' fontSize='sm'>
                      <ListItem>Name: {nft.metadata.name}</ListItem>
                      <ListItem>Image uri: {renderNFT(nft.image, true)}</ListItem>
                      <ListItem>External url: {nft.metadata.external_url}</ListItem>
                    </UnorderedList>

                    <Text fontSize='2xl' color='white' mt={2}>
                        Token
                    </Text>
                    <Divider mb={1}/>
                    <UnorderedList color='white' fontSize='sm'>
                      <ListItem>Address: {nft.token_address}</ListItem>
                      <ListItem>Hash: {nft.token_hash}</ListItem>
                      <ListItem>Id: {nft.token_id}</ListItem>
                      <ListItem>Uri: <a  className='hover:text-pink-700' href={nft.token_uri} target='_blank'>{nft.token_uri}</a></ListItem>
                    </UnorderedList>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button colorScheme='tailwindPink'  mr={3} onClick={onClose}>
                      Close 
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

        </>
  )
}
