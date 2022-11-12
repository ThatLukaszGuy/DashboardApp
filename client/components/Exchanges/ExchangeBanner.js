import React from 'react'
import SubNav from '../Layout/SubNav'
import { GiMoneyStack } from 'react-icons/gi'
import styles from './Exchange.module.css'


export default function ExchangeBanner() {
  return (
    <div className={styles.exchange_container}>
        
    <SubNav currentRoute='News' icon={<GiMoneyStack size={32}/>}/>
    
    <div className='text-center grid grid-cols-1 place-items-center mt-20'>
        <h1 className='text-white text-3xl font-thin z-50 my-2 break-words' style={{fontSize: '80px'}}>Exchanges</h1>
        <h3 className='text-gray-200 text-xl mt-6 z-50 my-2 break-words'>Check out the most popular exchanges and info about them</h3>
    </div>

    <div className={styles.exchange_svg}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className={styles.shape_fill}></path>
        </svg>
    </div>
</div>
  )
}
