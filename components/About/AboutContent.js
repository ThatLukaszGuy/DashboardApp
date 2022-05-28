import React from 'react'

export default function AboutContent() {
  return (
    <div className=''>
      <div className='z-1 shadow-2xl'>
          <div className="flex flex-col items-center bg-gray-700 rounded-lg shadow-md  md:flex-row">
            <img className="object-cover w-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg" src="https://blog.spoongraphics.co.uk/wp-content/uploads/2015/11/thumbnail9.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal" >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700">About this page</h5>
                <p className="mb-3 font-normal text-white text-left">
                  This site is a web3 dashboard app running on the moralis framework and built in a next js application. Find out more in the github docs <a href='https://github.com/ThatLukaszGuy/DashboardApp/blob/main/README.md' className='underline' target='_blank'>here</a>
                 
                  
                </p>
            </div>
          </div>
      </div>
    </div>
  )
}
