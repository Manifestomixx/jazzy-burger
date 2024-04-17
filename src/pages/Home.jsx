import React, { useEffect } from 'react'
import Hero from '../components/Hero'

const Home = () => {
    useEffect(()=>{
        document.title = "Home | Page"
    })
  return (
    <>
    <main className='container '>
        <Hero/>
    </main>
    
    </>
  )
}

export default Home