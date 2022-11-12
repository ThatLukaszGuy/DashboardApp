import React from 'react'
import AboutContent from './AboutContent'

export default function About() {
  return (
    <div className='about-container flex justify-center items-center'>
      <div className="custom-shape-divider-top-1653175887">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
          </svg>
      </div>
      <div className=' mx-6'>
        <AboutContent />
      </div>
      
 
    </div>
  )
}
