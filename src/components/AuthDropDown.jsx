import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginicon from '../assets/login.svg';
import signupicon from '../assets/signup.svg';


const AuthDropDown = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    <main className='container shadow-lg border rounded bg-light p-2'>

        <div className='d-flex flex-column gap-3 m-3'>
            {isLoggedIn ? <>
            <Link className='btn btn-primary text-light f-5'>Logout</Link> 
            <Link className='btn btn-primary text-light f-5'>Order</Link> 
            </> : 
            <>
            <div className='d-flex bg-primary border rounded p-2 gap-3'>
                <img src={loginicon} alt="login-icon" />
            <Link to='/SignIn'className='btn text-light f-5'>Login </Link> 
            </div>

            <div className='d-flex border border-danger rounded p-2 gap-3'>
                <img src={signupicon} alt="sigup-icon"/>
            <Link to='/SignUp'className='btn text-danger fw-bolder '>SignUp </Link> 
            </div>
            </>}
        </div>
    </main>
    
    </>
  )
}

export default AuthDropDown