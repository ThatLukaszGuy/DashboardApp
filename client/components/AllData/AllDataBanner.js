import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import SubNav from '../Layout/SubNav'
import styles from './AllData.module.css'

export default function AllDataBanner() {
  return (
    <>
        <div className={styles.allDataContainer}>
            <SubNav currentRoute='All Data' icon={<FaDatabase size={32}/>}/>


            <div className={styles.allSvg}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </div>

    </>
  )
}
