import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AboutContent() {
  return (
    <Center py={{base: 2,sm: 6}} className='about-box'>
    <Box
      maxW={'320px'}
      w={'full'}
      bg={'customGray.900'}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={{base: 4,sm: 6}}
      textAlign={'center'}
      position={'relative'}
      >
      <Avatar
        size={'2xl'}
        src={
          'images/ethereum.svg'
        }
        alt={'Avatar Alt'}
        mb={4}
        bg={'customGray.900'}
        pos={'relative'}
        className='avatar'

      />
      <Heading fontSize={'2xl'} fontFamily={'body'} color={'gray.100'}>
        About
      </Heading>
      <Text fontWeight={600} color={'gray.300'} mb={4}>
        this Page
      </Text>
      <Text
        textAlign={'center'}
        color={'gray.300'}
        px={3}>
          This Page is an app built on the moralis.io API with the goal to allow users to see all their assets along with additional data.
          <span className='about-text'>On top of this you can find multiple other new information such as graphs, news, exchanges, or just overall data about a chosen coin
          </span>
      </Text>



      <Stack mt={8} direction={'row'} spacing={4} align={'center'} textAlign={'center'}>
        <a href='#'>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200'
            }}
            colorScheme={'gray'}
            >
              
            Go back Up
          </Button>
        </a>

          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'tailwindPink.500'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(190 24 93 / 48%), 0 10px 10px -5px rgb(190 24 93 / 43%)'
            }
            _hover={{
              bg: 'tailwindPink.600',
            }}
            _focus={{
              bg: 'tailwindPink.600',
            }}
            rightIcon={<svg className="ml-1 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
            onClick={() => window.open('https://github.com/ThatLukaszGuy/DashboardApp/blob/main/README.md', '_blank')}
            >
            Read More
          </Button>

      </Stack>
    </Box>
  </Center>
  )
}
