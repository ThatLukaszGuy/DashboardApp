import axios from 'axios'
import React, {  useState } from 'react'
import { LinkBox, Box, Heading, LinkOverlay,Text } from '@chakra-ui/react'
import NewsBanner from './NewsBanner'
import styles from './News.module.css'


export default function NewsHandler({news}) {
  
  const [more, setMore] = useState(false)



  return (
    <div>
      <NewsBanner />
      <div className={styles.lowerExSVG}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill2}></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill2}></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill2}></path>
            </svg>
        </div>
      <Box backgroundColor={'gray.800'}>
      <div className=' grid grid-cols-1 place-items-center '>

        
        <ul className='grid md:grid-cols-3 lg:grid-cols-4  gap-4 mt-56 sm:grid-cols-2 grid-cols-1 mx-4'>  
          {news? 
            news.slice(0, 16).map((article, i) => (
              <>
                <LinkBox key={article[i]} as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' background='gray.900' color='white'  className='sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none hover:border-pink-700 border-transparent border-gray-600 shadow-lg hover:shadow-2xl' >
                  <Heading size='md' my='2'>
                    <LinkOverlay href={article.url}>
                      {article.title}
                    </LinkOverlay>
                  </Heading>
                  <Text mb='3'>
                    By: {article.source}
                  </Text>
                  <Box as='a' color='tailwindPink.600' href={article.url} fontWeight='bold'>
                    <a href={article.url} >
                    Read more
                    </a>
                  </Box>
                </LinkBox>
              </>


          )) 
          : 'no data :/'}

          {more? 
                  
                  news.slice(16).map((article, i) => (
                    <LinkBox key={article[i]} as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' background='gray.900' color='white'  className='sm:hover:scale-105 hover:z-50 ease-in-out duration-300 hover:transform-none hover:border-pink-700 border-transparent border-gray-600 shadow-lg hover:shadow-2xl' >
                    <Heading size='md' my='2'>
                      <LinkOverlay href={article.url}>
                        {article.title}
                      </LinkOverlay>
                    </Heading>
                    <Text mb='3'>
                      By: {article.source}
                    </Text>
                    <Box as='a' color='tailwindPink.600' href={article.url} fontWeight='bold'>
                      <a href={article.url} >
                      Read more
                      </a>
                    </Box>
                  </LinkBox>
                


                )) 

                :
                  <div></div>
                }
        </ul>
        
        {!more 
        
        ? 
        <button 
          type='button' 
          className='bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-7 border border-pink-800 rounded shadow mx-3 my-5' 
          onClick={() => setMore(true) }
          >
          Load All 
        </button>         

        :
        
        <div className='my-10'></div>
        }
        
  
                

      </div>
      </Box>
      </div>
  )
}
