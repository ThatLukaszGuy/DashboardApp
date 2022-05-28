import React from 'react'
import GraphBanner from './GraphBanner'
import styles from './Graphs.module.css'
import { Grid,GridItem,Box,Tabs,TabList,Tab,TabPanels,TabPanel,Text,Button } from '@chakra-ui/react'
import LineChartEth from './Charts/LineChartEth'
import LineChartBtc from './Charts/LineChartBtc'
import MarketCap from './Charts/MarketCap'
import Volume from './Charts/Volume'
import BarChart from './Charts/BarChart'

export default function GraphHandler() {
  return (
    <Box backgroundColor={'gray.800'} pb={'50px'}>
        <GraphBanner />
        <div className={styles.lowerExSVG}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill2}></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill2}></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill2}></path>
            </svg>
        </div>
        
        <Text fontSize={'4xl'} align={'center'} mt={'140px'} color={'gray.100'} >See all charts below</Text>
        <Text fontSize={'xl'} align={'center'} mt={'3px'} color={'gray.300'} >Make sure to reload the page if you resize your window , so all charts can adapt</Text>
        <div className='grid grid-cols-1 place-items-center mt-2'>
            <Button variant={'outline'} colorScheme={'pink'} onClick={() => location.reload()} >Reload</Button>
        </div>
        <Grid
        minH={{base:'100vh'}}
        mt={'150px'}
        ml={'8px'}
        mr={'8px'}
        templateRows={{md:'repeat(2, 55vh)' ,base:'repeat(6, 60vh)'}}
        templateColumns={{md:'repeat(5,1fr)',base:'repeat(1, 1fr)'}}
            gap={4}
            >
            <GridItem rowSpan={{md:2,base:2}} colSpan={{base:1}} bg={'gray.900'} rounded={'lg'} className='border-2 border-pink-700' p={3}>
                    <BarChart />
            </GridItem>

            <GridItem colSpan={{md:2,base:1}}  bg={'gray.900'} rounded={'lg'} className='border-2 border-pink-700' p={3}>
                <Volume />
            </GridItem>
            <GridItem colSpan={{md:2, base:1}}  bg={'gray.900'} rounded={'lg'} className='border-2 border-pink-700' p={3}>
                <MarketCap />
            </GridItem>
            <GridItem colSpan={{md:4,base:1}} bg={'gray.900'} rounded={'lg'} className='border-2 border-pink-700' p={3}>
                <Tabs isFitted variant='soft-rounded' bg={'gray.900'} colorScheme={'pink'} rounded={'lg'} p={3}>
                    <TabList mb='1em' >
                        <Tab mx={1} >Ethereum Chart</Tab>
                        <Tab mx={1}>Bitcoin Chart</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <LineChartEth />
                        </TabPanel>
                        <TabPanel>
                           <LineChartBtc />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>

        </Grid>
    </Box>
  )
}
