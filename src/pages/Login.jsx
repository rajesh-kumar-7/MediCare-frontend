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
    <div className='flex mt-10 flex-col justify-center items-center'>
      <div className='flex items-center flex-col justify-center border-2 rounded'>


    {msg&&<h2>{msg}</h2>}
    <h1 className="text-blue-400"> Login</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 m-3'>
      <input className="rounded border-2 text-center" type="text" placeholder='enter email' name="email" value={form.email} onChange={handleChange}/>
      <input className="rounded border-2 text-center" type="password" placeholder='enter password' name="password" value={form.password} onChange={handleChange}/>
      <input className="border-2 rounded-full" type="submit" value="login"/>
    </form>
     <p className="text-xs p-2">Don't have an account ?<Link to='/signup' className="text-blue-400 underline" >Click here</Link> </p>
      </div>
    </div>
    </>
  )
}

export default Login
