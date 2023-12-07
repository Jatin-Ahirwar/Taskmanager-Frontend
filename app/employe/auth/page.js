// "use client"
// import '@/app/css/employeauth.css'
// import Create from '@/Components/home/Create'
// import Footer from '@/Components/home/Footer'
// import Show from '@/Components/home/Show'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const page = () => {
//   const dispatch = useDispatch()
//   const { employe } = useSelector((state)=>state.EmployeReducer)
//   const [title, settitle] = useState("")
//   const [description, setdescription] = useState("")
//   const [status, setstatus] = useState("Due")
//   const [tasks, settasks] = useState([])
//   const [activetask, setactivetask] = useState(null)
//   useEffect(()=>{
//   },[employe])
//   return <>
    
//     <div>
//       <Create
//         title = {title}
//         settitle = {settitle}
//         description = {description}
//         setdescription = {setdescription}
//         status = {status}
//         setstatus = {setstatus}
//         tasks = {tasks}
//         settasks = {settasks}
//         activetask = {activetask}
//         setactivetask = {setactivetask}

//       />
//       <hr />
//       <h2 className='ms-5'>Tasks</h2>
//       <Show 
//       tasks = {tasks}
//       settasks = {settasks}
//       setdescription = {setdescription}
//       setstatus = {setstatus}
//       setactivetask = {setactivetask}
//       settitle = {settitle}
//       activetask = {activetask}
//       />
//     </div>

//   <Footer />
//   </>
// }

// export default page




"use client"
import '@/app/css/employeauth.css'
import Create from '@/Components/home/Create'
import Footer from '@/Components/home/Footer'
import Show from '@/Components/home/Show'
import { asynccreatetasks, asyncdeletetasks, asyncshowsingletask, asyncshowtasks, asyncupdatetasks } from '@/Store/Actions/EmployeActions'
import { addsingletask } from '@/Store/Reducers/EmployeReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch()
  const { employe , tasks , singletask } = useSelector((state)=>state.EmployeReducer)
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [status, setstatus] = useState("Due")
  const [task, settask] = useState([])
  const [activetask, setactivetask] = useState(null)
  const submithandler = async (e)=>{
    e.preventDefault()
    console.log(e)
    const newtask = {
        title:title,
        description:description,
        status:status
    }
    dispatch(asynccreatetasks(newtask))
    settitle("")
    setdescription("")
    setstatus("Due")
}
const updatetask = (e)=>{
    e.preventDefault()
    const copytask = [...tasks]
    copytask[activetask] = {
        ...copytask[activetask],
        title,description,status
    }
    settasks(copytask)
    setactivetask(null)
    settitle("")
    setdescription("")
    setstatus("due")
    dispatch(asyncupdatetasks(id))
  }

    const deletehandler = (index)=>{
        // console.log(index)
        dispatch(asyncdeletetasks(index))
    }
    const updateHandler = (index)=>{
        dispatch(asyncshowsingletask(index))
        title,
        description,
        status
    }

  useEffect(()=>{
  },[employe])
  return <>
    <div className='container mt-5'>
        <h1 style={{textTransform:"capitalize"}}>{employe?.username} create your task</h1>
        <form onSubmit={submithandler} className='form w-50 '>
            <input 
                value={title}
                onChange={(event)=>{settitle(event.target.value)}}
                className='form-control mb-3'
                type="text"
                placeholder='Title' 
            />
            <textarea
                value={description}
                onChange={(event)=>{setdescription(event.target.value)}}
                className='form-control mb-3'
                type="text"
                placeholder='Description'
            />      
            <select value={status} onChange={(event)=>{setstatus(event.target.value)}} className='form-control mb-3'>
                <option value="Due">Due</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            {
                singletask === null ?(
                    <button onClick={submithandler} className='btn btn-primary w-25 '>Create Task</button>                    
                ):(
                    <button onClick={updatetask} className='btn btn-primary w-25 '>Update Task</button>                    
                )
            }
        </form>
        <div  style={{ minHeight:"41.5vh" , width:"100%", padding:"20px 0" , display:"flex"}}>
            {tasks && tasks.map((task)=>(
              <div key={task?._id} className="card  mb-3 ms-5" style={{ width: "18rem" , height:"25vh" }}>
                <div className="card-body">
                  <h5 className="card-title">{task?.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {task?.status}
                  </h6>
                  <p className="card-text">
                      {task?.description}
                  </p>
                  <button onClick={()=>{updateHandler(task && task._id)}} className="me-2 btn btn-sm   btn-dark">
                      Update Task
                  </button>
                  <button onClick={()=>{deletehandler(task && task._id)}} className="btn btn-sm btn-dark">
                      Delete Task
                  </button>
              </div>
            </div>
          ))} 
        </div>
    </div>
    
    
    

  <Footer />
  </>
}

export default page