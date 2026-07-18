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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

  <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

    <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
      Create Account
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Join MediCare and book appointments easily
    </p>

    {msg && (
      <p className="text-center text-red-500 font-medium mb-4">
        {msg}
      </p>
    )}

    <form onSubmit={onSubmitform} className="flex flex-col gap-5">

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter Full Name"
        required
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter Email"
        required
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter Password"
        required
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Create Account
      </button>

    </form>

    <p className="text-center text-gray-600 mt-6">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-600 font-semibold hover:underline"
      >
        Login
      </Link>
    </p>

  </div>

</div>
    </>
  );
};

export default UserSign;
