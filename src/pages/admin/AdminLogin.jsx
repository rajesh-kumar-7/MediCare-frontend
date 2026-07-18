import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api/axios.js";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/admin/login", form);
      setMsg(res.data.message);
      navigate("/admin/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to access the admin dashboard
        </p>

        {msg && (
          <p className="text-center text-red-500 mb-4 font-medium">
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default AdminLogin;