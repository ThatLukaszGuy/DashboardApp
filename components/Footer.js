import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Footer() {
  
  const Policy = () => {
    
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <p></p>,
      footer: 'Copyright 2018',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire({
        title: '<h4 style="color:#000;">Privacy Policy </h4>',
        html:
        '<p style="color:#000;"> This website stores part of your data due to the way moralis.io works . E.g Your public wallet address paired with a username u set. NOTE: No sensitive data is stored anywhere on this site or DB<br> <p>',
         
  
        confirmButtonColor: 'rgb(190 24 93)',
        confirmButtonText:'<p style="color:#fffff; padding:0; margin:0;">Close</p>',
        backdrop: `
        rgba(190, 24, 93 ,0.4)`,
         heightAuto:'false',
      
      
      })
    })
  }

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
                    <a href="#" className="mr-4 hover:underline md:mr-6" onClick={Policy}>Privacy Policy</a>
                </li>

                <li>
                    <a href="https://github.com/ThatLukaszGuy" target='_blank' className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
      </div>


    </div>
  )
}
