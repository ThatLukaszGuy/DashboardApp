import React from 'react'
import { 
    Box,
    Badge, 
    Avatar,
    Stack,
    Text,
    Heading,
    ListItem,
    List,
    ListIcon,
    Icon,  
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure } from '@chakra-ui/react'
import { GoInfo } from 'react-icons/go'
import { AiOutlineRight } from 'react-icons/ai'
import {FaRegThumbsUp, FaRegThumbsDown,FaHandPointRight } from 'react-icons/fa'


export default function ExchangeCard({ 
    id, 
    name, 
    yearEstablished, 
    country,  
    url,
    image,
    tradingIncentive,
    trustScore,
    trustScoreRank,
    tradeVolume,
    tradeVolumeNormalized,
    desc
        }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
        <>
            <Box p='6' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={'gray.900'} borderColor={'gray.700'} className='sm:hover:scale-105 hover:z-30 ease-in-out duration-300 hover:transform-none hover:border-pink-700 border-transparent border-gray-600 shadow-lg hover:shadow-2xl'>
                <Stack>
                    <Text
                        color={'pink.700'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Exchange
                    </Text>
                    <Heading
                        color='white'
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {name}
                    </Heading>
                    <Text color={'gray.500'}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GoInfo} color='pink.500' />
                            Trust score rank: {trustScoreRank} 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoInfo} color='pink.500' />
                            Trust Score: {trustScore}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoInfo} color='pink.500' />
                            Trading Incentive: {tradingIncentive ? <Icon  as={FaRegThumbsUp} />  : <Icon as={FaRegThumbsDown}/> }
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoInfo} color='pink.500' />
                            Trading Volume in BTC (last 24h): {tradeVolume}
                        </ListItem>
                    </List>
                    </Text>
                </Stack>
                
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={image}
                        alt={id}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600} color='white'>{name} <Badge ml={1} mb={0.5} colorScheme={'pink'} cursor='pointer' variant='subtle' onClick={onOpen}>More Info</Badge></Text>
                        <Text  color={'gray.500'}><a href={url}>Visit Page<Icon  as={AiOutlineRight}/> </a> </Text>
                    </Stack>
                </Stack>
                    <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent backgroundColor={'gray.700'} color={'gray.100'}>
                        <ModalHeader>Additional Info on: {name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                                {desc != '' ? 
                                    <Text as='em' color={'gray.200'} mb={2} >{desc}</Text> 
                                    :
                                    <Text as='em' color={'gray.200'} mb={1}>No description provided</Text>
                                    }
                            <br />
                            <List mt={2}>
                                <ListItem >
                                    <ListIcon as={FaHandPointRight} color={'pink.500'}/>
                                    Established on: {yearEstablished} 
                                </ListItem>

                                <ListItem >
                                    <ListIcon as={FaHandPointRight} color={'pink.500'}/>
                                    Country: {country} 
                                </ListItem>

                                <ListItem >
                                    <ListIcon as={FaHandPointRight} color={'pink.500'}/>
                                    Trade volume (normalized): {tradeVolumeNormalized} 
                                </ListItem>

                                <ListItem >
                                    <ListIcon as={FaHandPointRight} color={'pink.500'}/>
                                    Id on CoinGecko: {id} 
                                </ListItem>

                            </List>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='pink' mr={3} onClick={onClose}>
                            Close
                            </Button>
                            <Button variant='outline' colorScheme={'pink'}><a href={url}>Visit Page !</a></Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
            </Box>
        
        </>
  )
}
