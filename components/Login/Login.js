import React from 'react'
import Link from 'next/link'
import styles from './Login.module.css'


export default function Login() {
  
  
  
    return (
    <div className={styles.bgLoginSvg}>
        <div className=' relative h-screen login max-h-screen flex flex-col  flex-wrap  items-center justify-center'>
            <div className='mx-4'>
                <div className='flex md:flex-row bg-gray-900 rounded-md md:flex flex-col  px-8 shadow-2xl min-w-0' >
                    {/*left side*/}    
                    <div className='flex flex-col justify-center  text-center py-20 px-4 flex-[1_1_0%] min-w-0'>
                        <div>
                            <h3 className='text-white font-bold text-2xl'>Choose wallet to login with</h3>
                        </div>
                        
                        <div className='mt-5 '>
                            <Link href={'/eth-main'}>
                                <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-7 border border-pink-800 rounded shadow mx-3 my-2">
                                
                                    <span>  Log in with MetaMask (ETH)</span>          
                                
                                
                                </button>   
                            </Link>
                        </div>

                        <div>
                            <Link href={'/sol-main'}>
                            
                                <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-8 border border-pink-800 rounded shadow mx-3 my-2">
                                    Log in with Phantom (SOL)          
                                </button>   
                            </Link>
                        </div>
                    </div>

                    <div className='lg:flex flex-col justify-center  text-center py-20 px-4 hidden flex-[1_1_0%] '>
                        <img src='https://lh3.googleusercontent.com/9BRc5VY8ToBcOKKntkaFEcRHJ11XvolhSqrBACTqEPYT9YZPQzOijkTH1uWI9BwutoxefHFMWfcQ_k6KubJZLSUthISs9xThuShRuHySgCPDd-uXTwOKRDdcjdfW3a5wnVBxayxi' className='rounded-md' />


                    </div>
                </div>


            
            </div>

            
            
        </div>
    </div>
  )
}
