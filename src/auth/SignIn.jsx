import React from 'react';
import jazzylogo from '../assets/jazzylogo.svg';
import '../styles/SignIn.css'
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
    <main className='container'>
      <section className=' bg-white h-100  w-md-50'>

      <div className='d-flex flex-column align-items-center my-5 '>
        
        <img src={jazzylogo} alt="jazzy-logo" className='w-25 my-5' />
        <h2 className='w-75 text-center '><b> SIGN IN TO YOUR ACCOUNT</b> </h2>
      </div>
      <div>
        <form className=''>
          <div className='d-flex flex-column text-secondary mt-5 gap-3'>
            {/* email */}
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='example@mail.com' id='email' className='p-2 border-1 rounded' />

          {/* password */}
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id='password' className='p-2 border-1 rounded ' />
          </div>
          <div>
          </div>
          <div className='d-md-flex justify-content-between align-items-center'>
            <div className='d-flex gap-2 my-3  align-items-center'>
            <input type="checkbox" className='larger' />
            <h5 className='mt-2'>keep me signed in</h5>
            </div>

            <div className='d-none d-md-block'>
              <h5 className='text-primary'> 
              <Link className='text-decoration-none'>
              Reset Password
              </Link> 
              </h5>
            </div>
          </div>
            <button className='btn btn-danger w-100'>Sign In</button>
            <h4 className='my-3'>Dont have an account? <Link to={"../SignUp"} className='text-decoration-none'>
            
             <span className='text-primary'>Create one</span>
            </Link>
             </h4>
          



        </form>
      </div>
      </section>
    </main>
    
    </>
  )
}

export default Signin