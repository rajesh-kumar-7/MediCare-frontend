import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import {useNavigate,Link} from 'react-router'
import api from '../api/axios'
const Login = () => {
  const navigate=useNavigate()

  const [form,setform]=useState({
    email:"",
    password:""
  })
  const [msg,setmsg]=useState("")
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      const res=await api.post('/api/user/login',form)
      setmsg(res.data.message)
      navigate('/')

    }
    catch(err){
      setmsg(err.response.data.message)

    }
    

  }
  const handleChange=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value
    })

  }
  return (
    <>
    <Navbar/>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

  <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

    <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
      Welcome Back
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Login to book your appointments
    </p>

    {msg && (
      <p className="text-center text-red-500 font-medium mb-4">
        {msg}
      </p>
    )}

    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>

    </form>

    <p className="text-center text-gray-600 mt-6">
      Don't have an account?{" "}
      <Link
        to="/signup"
        className="text-blue-600 font-semibold hover:underline"
      >
        Sign Up
      </Link>
    </p>

  </div>

</div>
    </>
  )
}

export default Login
