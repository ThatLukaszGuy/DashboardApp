import React from 'react'
import { BsGraphUp } from 'react-icons/bs'
import styles from './Graphs.module.css'
import SubNav from '../Layout/SubNav'

export default function GraphBanner() {
  return (
    <div className={styles.graphs_container}>
        
        <SubNav currentRoute='Graphs' icon={<BsGraphUp size={32}/>}/>
    
        <div className='text-center grid grid-cols-1 place-items-center mt-20'>
            <h1 className='text-white text-3xl font-thin z-50' style={{fontSize: '80px'}}>Graphs</h1>
            <h3 className='text-gray-200 text-xl mt-6 z-50'>The most important things visualized</h3>
        </div>

        <div className={styles.graphsSvg}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles.shapeFill}></path>
            </svg>
        </div>
    </div>
  )
}
