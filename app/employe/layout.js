"use client"
import { asynccurrentemploye, asyncsignoutemploye } from '@/Store/Actions/EmployeActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const StudentLayout = ({children}) => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state)=> state.EmployeReducer)
    const router = useRouter()
    useEffect(() => {
        dispatch(asynccurrentemploye())
        if(isAuthenticated){
            router.push("/employe/auth")
        }
    },[isAuthenticated])  
    const signoutHandler = ()=>{
        dispatch(asyncsignoutemploye())
    }

  return <>
    <div className='mainnav'>
        <div style={{justifyContent:"center" ,gap:"20px"}} className='mainnavleft'>
        </div>
        <div style={{justifyContent:"center " , gap:"20px"}} className='mainnavright'>
         
          {isAuthenticated ? 
          <>
          <Link id='login' className='Link' href={isAuthenticated ? "/employe/auth" : "/employe"}>Home</Link>
          <Link id='register' onClick={signoutHandler} className='Link' href="">Logout</Link>
          </>  
          :
          <>
          <Link id='register' className='Link' href="/employe/signin">Sign In</Link>
          <Link id='register' className='Link' href="/employe/signup">Sign Up</Link>

          </>
          }
        </div>
    </div>
    {children}
  </>
}

export default StudentLayout

