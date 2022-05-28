import React, { useRef } from 'react'
import SubNav from '../../components/Layout/SubNav'
import { FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import PrivacyDrawer from '../../components/Layout/Drawer';
import { useToast, 
          Box,
          Text,
          Badge,
          Avatar,  
          useDisclosure } from '@chakra-ui/react';


export default function contact() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const serviceId = process.env.NEXT_PUBLIC_SERVICEID
  const templateId = process.env.NEXT_PUBLIC_TEMPLATEID

  const toast = useToast()
  
  const form = useRef();

  const sendEmail = e => {
    

    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, form.current, 'baRTTaiS5YosRINb6')
      .then((result) => {
          toast({
            title: 'Email succesfully send',
           description: 'Everything went right and your email has been sent',
           status: 'success',
           duration: 9000,
           isClosable: true})
          
      }, (error) => {
          toast({
            title: 'Email could not be sent',
            description:  error,
            status: 'error',
            duration: 9000,
            isClosable: true
          })
      });
      form.current.reset()
  }
  
  return (
    <div className=' bg-gray-700'>
      <div className='contact-container '>
        <SubNav currentRoute='contact' icon={<FaPhone size={32}/>}/>
        <h1 className=' text-white font-thin text-[70px] z-50'>Contact</h1>
        <p className='text-gray-100 text-3xl z-50'>If you wish to work with me, please fill out the form below</p>
        <div className="custom-shape-divider-bottom-1653421206">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
        
      </div>

      <div className='max-w-[80vw] mx-auto flex sm:flex-row flex-col rounded-md border-gray-600 border p-3 justify-between'>
        <div className='flex'>
            <Avatar src='https://bit.ly/sage-adebayo' />        
            <Box ml='3' >

              <div className=''>
                <Text fontWeight='bold' color='white'>
                  Dev
                  <Badge ml='1' colorScheme='green'  variant='subtle'>
                    Info
                  </Badge>
                </Text>
                <Text fontSize='sm' color='white'>Wanna learn more about how your data is handled? </Text>
              </div>

            
            </Box>
          </div>
        <button className=' text-white mt-3 mb-2 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={onOpen} ref={btnRef}>Learn More</button> 
            
      </div>
      <PrivacyDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

      <div className='min-h-[50vh] bg-gray-700 '>
        <form ref={form} className='max-w-[80vw] mx-auto bg-gray-900 border border-gray-600 rounded-md p-5 mt-5 shadow-lg' onSubmit={sendEmail}>
          <div className="relative z-0 w-full mb-6 group">
              <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Email address</label>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="f_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
                <label htmlFor="f_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Last name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_last_name" id="l_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
                <label htmlFor="l_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " >Last name</label>
            </div>
          </div>
          <div className="grid xl:grid-cols-1 xl:gap-6">
            <textarea placeholder='Details...' className='placeholder:text-gray-400 min-h-[120px] block p-2.5 w-full text-sm  resize-none  text-white bg-gray-600 border-0 focus:border-2 rounded-lg  focus:ring-pink-700   focus:border-pink-700 focus:outline-none' name='message'>

            </textarea>
          </div>
          <button type="submit" className="text-white  mt-3 mb-2 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send !</button>
        </form>
      </div>

      <div className='bg-gray-700 mt-5'>
        <p className='text-gray-700'>. </p>
      </div>
    </div>
  )
}
