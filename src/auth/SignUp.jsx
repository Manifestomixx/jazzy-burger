import React, { useState } from 'react';
import jazzylogo from '../assets/jazzylogo.svg';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input/input';
import { formatPhoneNumber } from 'react-phone-number-input'
formatPhoneNumber('+12133734253') === '(213) 373-4253'


const SignUp = () => {
  const [value, setValue] = useState()
  return (
    <>
    <main>
      <section className='container bg-white my-5 '>

      <div className='d-flex flex-column align-items-center my-5 '>
        <img src={jazzylogo} alt="jazzy-logo" className='w-md-25 my-5' />
        <h2 className='w-50 text-center'><b> CREATE YOUR ACCOUNT</b></h2>
      </div>
      <div>
        <form className=''>
        
          <div className='d-flex flex-column text-secondary mt-5 gap-3'>
            {/* first name */}
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder='First Name' id='firstName' className='p-2 border-1 rounded '/>

            {/* last name  */}
            <label htmlFor="lastName">Last Name</label>
            <input type="text"  placeholder='Last Name' id='lastName' className='p-2 border-1 rounded '/>

            {/* email */}
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='example@mail.com' id='email' className='p-2 border-1 rounded' />

          {/* phone number */}
          <label htmlFor="number">Phone Number</label>
          <PhoneInput placeholder="Enter Phone Number" className="p-2 border-1 rounded" value={value} onChange={setValue}/>
          {/* <input type="tel" placeholder='' id='number' pattern='[0-9]' className='p-2 border-1 rounded'/> */}

          {/* password */}
          <label htmlFor="password">Password (8 minimum characters)</label>
          <input type="password" placeholder='Password' id='password' className='p-2 border-1 rounded ' />

          {/* confirm password */}
          <label htmlFor="password">Confirm Password</label>
          <input type="password" placeholder='Password' id='password' className='p-2 border-1 rounded ' />
          </div>
          <div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-2 my-3  align-items-center'>
            <input type="checkbox" className='larger' />
            <h5 className='mt-2'>keep me signed in</h5>
            </div>

            <div>
              <h5 className='text-primary mt-2'> 
              <Link className='text-decoration-none'>
              Reset Password
              </Link> 
              </h5>
            </div>
          </div>
            <button className='btn btn-danger w-100'>Create account</button>
            <h4 className='my-3 text-center'>Have an account? <Link  to={"../SignIn"} className='text-decoration-none'>
            
             <span className='text-primary'>Sign In</span>
            </Link>
             </h4>

             <div className='d-flex justify-content-center'>
             <h5 className='text-center mt-2 w-100 '>By Creating your Quickmunch account, you agree to the <span className='text-primary' >Terms of use </span> and <span className='text-primary'>Privacy Policy </span></h5>

             </div>
          



        </form>
      </div>
      </section>
    </main>
    
    </>
  )
}

export default SignUp