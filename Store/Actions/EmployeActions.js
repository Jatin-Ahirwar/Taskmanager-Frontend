import axios from "@/utils/axios";
import { addemploye,removeemploye,addtasks,iserror,removeerror, removetasks, addsingletask } from "../Reducers/EmployeReducer";

export const asynccurrentemploye = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/")
        dispatch(addemploye(data))
        // console.log("employe",data.employe)
        // console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignupemploye = (employe) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/employe/signup", employe )
            asynccurrentemploye()      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}


export const asyncinemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/signin" , employe)
        asynccurrentemploye()      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncsignoutemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/employe/signout" , employe)
        dispatch(removeemploye())
        dispatch(removetasks())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncshowtasks = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/task/read"  )
        dispatch(addtasks(data.tasks))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
export const asyncshowsingletask = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/employe/task/readsingle/${id}`, id )
        // console.log(data)
        dispatch(addsingletask(data.task))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asynccreatetasks = (task)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe/task/create",task);
        dispatch(asynccurrentemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncupdatetasks = (id)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post(`/employe/task/update/${id}`,task);
        dispatch(asynccurrentemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncdeletetasks = (id)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post(`/employe/task/delete/${id}`,id);
        dispatch(asynccurrentemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

