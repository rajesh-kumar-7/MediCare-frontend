import React from "react";
import { useState } from "react";
import api from "../api/axios.js";
import { useNavigate,Link } from "react-router";
import Navbar from '../components/Navbar.jsx'
const UserSign = () => {
   const navigate = useNavigate();
   const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
   });
   const [msg, setmsg] = useState("");
   const onSubmitform = async (e) => {
      e.preventDefault();
      try {
      const res = await api.post("/api/user/signup", form);
      setmsg(res.data.message);
      navigate("/login");
    } catch (err) {
      setmsg(err.response.data.message);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <Navbar/>
      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-center items-center flex-col border-2 gap-3 border-black-400 rounded p-5">
          <h1 className="text-blue-400"> Create New Account</h1>
          {msg && <h1 className="text-blue-400"> {msg}</h1>}

          <form className="flex flex-col gap-5 " onSubmit={onSubmitform}>
            <input
              className="border-2 rounded text-center "
              onChange={handleChange}
              type="text"
              placeholder="enter your name"
              name="name"
              value={form.name}
              required
            />
            <input
              className="border-2 rounded text-center "
              onChange={handleChange}
              type="email"
              placeholder="enter your email"
              value={form.email}
              name="email"
              required
            />
            <input
              className="border-2 rounded text-center "
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="enter your password"
              name="password"
              required
            />
            <input
              className="border-2 rounded-full"
              type="submit"
              value="Sign up"
            />
          </form>
          <p className="text-xs">Already have an account? <Link className="text-blue-400 underline" to='/login'>Click here</Link></p>
        </div>
      </div>
    </>
  );
};

export default UserSign;
