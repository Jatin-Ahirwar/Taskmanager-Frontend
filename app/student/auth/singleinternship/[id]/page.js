// "use client"
// import { removesingleinternships } from '@/Store/Reducers/StudentReducer'
// import { useRouter } from 'next/navigation'

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'


// const page = () => {
//   const router = useRouter()
//   const dispatch = useDispatch()
//   const { singleinternships ,   } = useSelector((state)=>state.StudentReducer)
//   const [id, setid] = useState("")
//   const newid = ()=>{
//     setid(singleinternships && singleinternships._id)
//   }
  
//   useEffect(()=>{
//   },[singleinternships])

//   useEffect(() => {
//       if(!router.pathname === `/student/auth/singleinternship/${newid}`){
//         dispatch(removesingleinternships());
//       }
//   }, [dispatch]);
//   return (
//     <div>
//       {/* <button onClick={click}> button</button> */}
//         <p>{JSON.stringify(singleinternships)}</p>
//     </div>
//   )
// }

// export default page


'use client'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { asyncshowsingleinternships } from '@/Store/Actions/StudentActions';
import Solointernship from '@/Components/student/SoloInternship';
const page = (props) => {
  const { internship } = useSelector((state)=>state.StudentReducer)
  const dispatch = useDispatch();
  const id = props.params.id;
  
  useEffect(()=>{
    dispatch(asyncshowsingleinternships(id))
  },[])

  return (
    <>
      <Solointernship/>
    </>
  )
}

export default page