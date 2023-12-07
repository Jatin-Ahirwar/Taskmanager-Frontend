"use client"
import { asynccreatetasks } from '@/Store/Actions/EmployeActions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Create = (props) => {
    const { employe } = useSelector((state)=>state.EmployeReducer)
    const dispatch = useDispatch()
    const  {
        title,
        settitle,
        description,
        setdescription,
        status,
        setstatus,
        tasks,
        settasks,
        activetask,
        setactivetask
        
    } = props
    const submithandler = async (e)=>{
        e.preventDefault()
        console.log(e)
        const newtask = {
            date: new Date().toLocaleDateString(),
            title:tasks,
            description:description,
            status:status
        }
        // await dispatch(asynccreatetasks(newtask))
        settasks([...tasks,newtask])
        settitle("")
        setdescription("")
        setstatus("due")
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
        }
    return (
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
                activetask === null ?(
                    <button onClick={submithandler} className='btn btn-primary w-25 '>Create Task</button>                    
                ):(
                    <button onClick={updatetask} className='btn btn-primary w-25 '>Update Task</button>                    
                )
            }
        </form>
    </div>
  )
}

export default Create