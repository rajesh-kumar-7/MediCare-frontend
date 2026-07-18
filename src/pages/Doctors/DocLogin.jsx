import React,{useState} from 'react'
import api from '../../api/axios'
import {useNavigate} from 'react-router'

const DocLogin = () => {
    const Navigate = useNavigate()
    const [form,setform] = useState({
        email:"",
        password:""
    })
    const [msg,setmsg] = useState("")
    const handleChange=(e)=>{
        setform({

            ...form,
            [e.target.name]:e.target.value
        }
        )

    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
try{

    const res = await api.post("/api/Doctor/login",form)

    Navigate("/doctor/Dashboard")
   
}
catch(err){
    setmsg(err.response.data.message)
    console.log(err)
}



    }
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

  <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

    <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
      Doctor Login
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Sign in to manage your appointments
    </p>

    {msg && (
      <p className="text-center text-red-500 font-medium mb-4">
        {msg}
      </p>
    )}

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >

      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Enter Email"
        onChange={handleChange}
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Enter Password"
        onChange={handleChange}
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>

    </form>

  </div>

</div>
    </>
  )
}

export default DocLogin
