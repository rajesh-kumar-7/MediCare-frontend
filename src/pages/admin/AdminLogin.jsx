import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api/axios.js";
const AdminLogin = () => {
  const Navigate = useNavigate();
  const [msg,setmsg]=useState("")
  const [form, setform] = useState({
    email:"",
    password:""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res= await api.post("/api/admin/login", form);
      setmsg(res.data.message)
      Navigate('/admin/dashboard')
    } catch (err) { 
        setmsg(err.response.data.message)
    }
  };
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen flex-col ">
        {msg&&<h2>{msg}</h2>}
        <div className="border rounded gap-5 p-3 flex item-center justify-center flex-col">

        <h1 className="text-blue-400 text-center">ADMIN LOGIN</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="enter email" className="border rounded text-center"/>
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="enter password" className="border rounded text-center"/>
        <input type="submit" value="Sign in" className="bg-blue-300 rounded-full text-center  p-2 text-white"/>
      </form>
        </div>
    </div>
    </>
  );
};

export default AdminLogin;
