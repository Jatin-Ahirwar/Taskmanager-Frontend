"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from '@/Components/home/Nav'
import Page1 from '@/Components/home/Page1'
const page = () => {
  const dispatch = useDispatch()
  return <>
      {/* <Nav /> */}
      <Page1 />
    </>
}

export default page