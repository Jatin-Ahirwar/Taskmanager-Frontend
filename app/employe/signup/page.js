"use client"
import Footer from '@/Components/home/Footer'
import { asyncsignupemploye } from '@/Store/Actions/EmployeActions'
import EmployeReducer from '@/Store/Reducers/EmployeReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const signup = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
  const { isAuthenticated } = useSelector((state)=> state.EmployeReducer)

  // const checkhandler = (e)=>{
  //   e.preventDefault()
  //   console.log(firstname,lastname,city,contact,gender,email,password)
  //   console.log(e.target.value)
  // }
  const submitHandler = (e)=>{
    e.preventDefault()
    const newEmploye = {
      username:username,
      email:email,
      password:password
    }
    dispatch(asyncsignupemploye(newEmploye))
  }
  useEffect(() => {
    if(isAuthenticated){ 
      router.push("/employe/auth")
    }
  },[isAuthenticated]) 
  return <>
    <div className='authorization'>
      <img style={{height: "50vh"}} src="https://img.freepik.com/premium-vector/business-team-brainstorm-idea-lightbulb-working-team-collaboration-colleagues-mutual-assistance_566886-3325.jpg?w=2000" alt="" />
      <div className='signupform'>
        <h3>Employe SignUp</h3>
        <h6>Signup to access resources</h6>
        <form onSubmit={submitHandler}>

        
          <label className='more'>username</label>
          <input onChange={(e)=>setusername(e.target.value)} className='more'  required type="text" name='text' placeholder='Username' />

          <label className='more'>Email</label>
          <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' />

          <label className='more'>Password</label>
          <input onChange={(e)=>setpassword(e.target.value)} className='more'  required type="password" name='password' placeholder='Password' />
          <button id='btn'  className='btn btn-primary' required type='submit'>Signup</button>
        
        </form>
      <h6 style={{marginTop:"10px"}}>Already have an account ? <Link href="/employe/signin">Login Account</Link></h6>
      </div>    
    </div>
    <Footer />


    {/* <div className='container mt-5'>
      <button onClick={submitHandler} className='btn btn-primary'>signup</button>
    </div> */}
    </>
}

export default signup