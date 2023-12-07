"use client"
import { asyncshowtasks } from '@/Store/Actions/EmployeActions'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EmployeAuth = ({children}) => {
  const dispatch = useDispatch()
  const { isAuthenticated }= useSelector((state) => state.EmployeReducer)
  const router = useRouter()
  useEffect(() => {
      if(!isAuthenticated){
          router.push("/employe/")
      }
      if(isAuthenticated){
        router.push("/employe/auth")
        dispatch(asyncshowtasks())
      }
  },[isAuthenticated])     
  return children
}

export default EmployeAuth