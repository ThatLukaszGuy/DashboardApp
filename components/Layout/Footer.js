import React,{ useRef } from 'react'
import Link from 'next/Link'
import PrivacyDrawer from './Drawer'
import { useDisclosure } from '@chakra-ui/react'

export default function Footer() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className='relative footer-container z-0 bg-gray-700 pb-3'>
      <div className="custom-shape-divider-top-1648744498">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
      <div className='pt-10 ml-16 font-bold'>
        <footer className="pt-10 p-4 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between md:p-6 " >
            <span className="text-sm text-white sm:text-center  ">© ThatLukaszGuy
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0 pt-10 z-50">
                <li>
                    <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6" onClick={onOpen} ref={btnRef}>Privacy Policy</a>
                </li> 

                <li>
                  <Link href={'/contact'}>
                      <a className="hover:underline ">Contact</a>
                  </Link>
                </li>
            </ul>
            
        </footer>
      </div>
      <PrivacyDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

    </div>
  )
}
