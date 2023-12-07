import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employe:null,
    tasks:null,
    singletask:null,
    errors:[],
    isAuthenticated:false
}

export const EmployeReducer = createSlice({
    name: 'employe',
    initialState,
    reducers: {
    addemploye: (state,action) =>{
    (state.employe = action.payload),
    (state.isAuthenticated = true)
    },
    addtasks: (state,action) =>{
    state.tasks = action.payload
    },
    removetasks: (state,action) =>{
    (state.tasks = null)
    },
    addsingletask: (state,action) =>{
    state.singletask = action.payload
    },
    removesingletask: (state,action) =>{
    (state.singletask = null)
    },
    removeemploye: (state,action) =>{
    (state.employe = null),
    (state.isAuthenticated = false)
    state.errors = []
    },
    iserror: (state,action) =>{
        state.errors.push(action.payload)
    },  
    removeerror: (state,action) =>{
        state.errors = []
    },   
  },
})

export const {removetasks,addsingletask,removesingletask ,addemploye , removeemploye , iserror , removeerror , addtasks } = EmployeReducer.actions

export default EmployeReducer.reducer