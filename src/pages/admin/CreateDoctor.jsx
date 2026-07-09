import React from 'react'
import {useState} from 'react'
import api from '../../api/axios'
import {useNavigate} from 'react-router'
const CreateDoctor = () => {
    const Navigate = useNavigate()
    const [formData,setformData]=useState({
        name:"",
    email:"",
    password:"",
    about:"",
    phone:"",
    fees:"",
    qualification:"",
    title:"",
    image:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        api.post('/api/admin/addDoctor',formData)
        alert("doctor added")
        Navigate('/admin/dashboard')
        
    }
    const handleChange=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        }
        )
    }
  return (
    <>
    <div className="items-center justify-center h-screen flex flex-col">
        <h1 className="text-blue-400">Add doctor</h1>
        <form className='flex flex-col border w-fit p-3 gap-2' onSubmit={handleSubmit}>
            <input type="text" className="border text-center rounded" name="name"  value={formData.name} onChange={handleChange} placeholder='name'/>
            <input type="text" className="border text-center rounded" name="email" value={formData.email} onChange={handleChange} placeholder='email'/>
            <input type="text" className="border text-center rounded" name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
            <input type="text" className="border text-center rounded" name="about" value={formData.about} onChange={handleChange} placeholder='about'/>
            <input type="text"  className="border text-center rounded" name="phone"  value={formData.phone} onChange={handleChange}placeholder='phone'/>
            <input type="text" className="border text-center rounded" name="fees" value={formData.fees} onChange={handleChange} placeholder='fees'/>
            <input type="text" className="border text-center rounded" name="qualification" value={formData.qualification} onChange={handleChange} placeholder='qualification'/>
            <input type="text" className="border text-center rounded" name="title" value={formData.title} onChange={handleChange} placeholder='title'/>
            <input type="text" className="border text-center rounded" name="image" value={formData.url} onChange={handleChange} placeholder='image url'/>
            <input type="submit" value="Create Doctor" className='border rounded-full'/>
        </form>
    </div>
    </>
  )
}

export default CreateDoctor
