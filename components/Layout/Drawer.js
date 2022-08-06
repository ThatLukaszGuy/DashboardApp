import React from 'react'
import { Text, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, 
    Badge,
    Divider,
    Portal,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    Spacer,
    Flex
  } from '@chakra-ui/react';
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BiServer } from 'react-icons/bi'
export default function PrivacyDrawer({ isOpen, onClose,btnRef }) {
  return (
    <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            
            >
                <DrawerOverlay />
                <DrawerContent background='gray.900' >
                  <DrawerCloseButton color='gray.100' />
                  <DrawerHeader color='gray.100'>Privacy Policy</DrawerHeader>

                  <DrawerBody>
                    <Text fontSize='2xl' color='white'>
                        Moralis.io & Sol + Eth
                    </Text>
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                        When logging in using your metamask or phantom account moralis.io <Badge fontSize='xs' variant='subtle' colorScheme='pink'>does</Badge> store your public wallet address along with a random generated username into their Database.
                        You can change/update said username at any given point in time. For exact details press the 'Read More' button. 
                    </Text>

                    <Text fontSize='2xl' color='white' mt={2}>
                        Form & Email
                    </Text>
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                        This website does not handle the form using a backend. The data from the form gets processed by the <Badge fontSize='xs' variant='subtle' colorScheme='pink'>EmailJS</Badge> package
                         and after reformatting it, sends to my email inbox.
                    </Text>

                    <Text fontSize='2xl' color='white' mt={2}>
                        Other
                    </Text>
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                        Apart from the previously mentioned aspects the website <Badge fontSize='xs' variant='subtle' colorScheme='pink'>does not</Badge> store/save any of your personal/private/outside data.
                    </Text>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button colorScheme='tailwindPink'  mr={3} onClick={onClose}>
                      Close 
                    </Button>
                    <Popover placement='top-end'>
                      <PopoverTrigger>
                        <Button colorScheme='gray'>Read More</Button>
                      </PopoverTrigger>
                      <Portal >
                        <PopoverContent width='280px'>
                          <PopoverArrow />
                          <PopoverHeader >Read More about</PopoverHeader>
                          <PopoverCloseButton />
                          <PopoverBody >
                            <Flex>
                              <Button leftIcon={<BiServer />} colorScheme='tailwindPink' variant='outline' onClick={() => window.location.href = 'https://moralis.io/terms/'}>Moralis.io</Button>
                              <Spacer />
                              <Button rightIcon={<HiOutlineMailOpen />} colorScheme='tailwindPink' variant='outline' onClick={() => window.location.href = 'https://www.emailjs.com/legal/privacy-policy/'}>EmailJS</Button>
                            </Flex>
                          </PopoverBody>
                          <PopoverFooter>Links to each private policy</PopoverFooter>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                    
                  
                  
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
  )
}
