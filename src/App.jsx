import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import Signup from "./pages/UserSign"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AdminDashboard from './pages/admin/AdminDashboard'
import CreateDoctor from './pages/admin/CreateDoctor'
import AdminLogin from './pages/admin/AdminLogin'
import AllDoctors from './pages/admin/AllDoctors'
const router=createBrowserRouter([
  {path:"/signup",element:<Signup/>},
  {path:"/login",element:<Login/>},
  {path:"/",element:<Home/>},
  {path:"/admin/login",element:<AdminLogin/>},
  {path:"/admin/dashboard",element:<AdminDashboard/>},
  {path:"/admin/addDoctor",element:<CreateDoctor/>},
  {path:"/admin/allDoctor",element:<AllDoctors/>}

])

const App = () => {
   return <RouterProvider router={router}/>
}

export default App
