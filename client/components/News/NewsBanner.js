import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import SubNav from '../Layout/SubNav'
import styles from './News.module.css'

export default function NewsBanner() {
  return (
    <div className={styles.news_container}>
        
        <SubNav currentRoute='News' icon={<FaPaperPlane size={32}/>}/>
        
        <div className='text-center grid grid-cols-1 place-items-center mt-20'>
            <h1 className='text-white text-3xl font-thin z-50' style={{fontSize: '80px'}}> News Tab</h1>
            <h3 className='text-gray-200 text-xl mt-6 z-50'>Browse the most recent crypto related news</h3>
        </div>

        <div className={styles.newsSvg}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
            </svg>
        </div>
    </div>
  )
}
