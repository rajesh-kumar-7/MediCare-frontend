import React from 'react'
import { Navigate } from 'react-router'
import {useState,useEffect} from "react"
import api from '../api/axios'
const Protect = ({children}) => {
    const [islog,setislog]=useState(null)
useEffect(() => {
  api.get("/api/user/me")
    .then((res) => {
      setislog(true);
    })
    .catch((err) => {
      setislog(false);
    });
}, []);

if(islog==null){
    return <h1>wait</h1>
}
    if(!islog){
        return <Navigate to="/login"/>
    }

  return (
    children
  )
}

export default Protect
