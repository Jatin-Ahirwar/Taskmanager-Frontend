"use client"
import Footer from '@/Components/home/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const page = () => {
  const { isAuthenticated } = useSelector((state) => state.EmployeReducer)
  // const { isAuthenticated }= useSelector((state) => state.StudentReducer)
  const router = useRouter()
  useEffect(() => {
      if(isAuthenticated){
          router.push("/employe/auth")
      }
  },[isAuthenticated]) 
  return <>
    <div className='studentauth'>
      <div className='tags'>
      <h2>Employee authentication and authorization.</h2>
      <p>"Introducing my innovative Task Manager web app—streamlining productivity with user-friendly features. Effortlessly organize tasks, set priorities, and track progress in real-time. Enjoy a seamless experience that enhances efficiency and helps you stay focused. Elevate your productivity with this intuitive tool, designed for simplicity and effectiveness. Happy organizing!"</p>
      <Link className='Link' id='register' href="/employe/signin">Signin</Link>
      <Link className='Link' id='register' href="/employe/signup">Signup</Link>  
      </div>
      <img style={{ height: "50vh"}} id='stuimg' src="https://img.freepik.com/premium-vector/uiux-designer-illustration-concept-white-background_701961-878.jpg"/>
    </div>
    <Footer />
  </>
}

export default page

