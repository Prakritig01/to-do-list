import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : 'FilterNameInSlice',
    initialState : {
        statusFilter : "",
        
    },
    reducers : {
        setStatusFilter : (state,action) => {
            
        }
    }
})