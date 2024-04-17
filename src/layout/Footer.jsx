import React from 'react'
import { Outlet } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <main>
      <footer className='container '>
        <section className='bg-dark'>
        <div>
          <div>
          <img src="" alt="" />
          <h2>24/7</h2>
          <p>support</p>
          </div>
          <div>
          <img src="" alt="" />
          <h2>100%</h2>
          <p>Payment Secured</p>
          </div>
        </div>

        <div>
          <h3>Need Help</h3>
          <p>+234 907 466 6655 or</p>
          <p>help@jazzysburger.com</p>
        </div>

        <div>
          <h2>FOLLOW US</h2>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        </section>
        <section>
         <img src="" alt="" /> 
         <img src="" alt="" /> 
        </section>

      </footer>
      <Outlet/>
    </main>
    
    
    </>
  )
}

export default Footer