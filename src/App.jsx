import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Signup from "./pages/UserSign";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateDoctor from "./pages/admin/CreateDoctor";
import AdminLogin from "./pages/admin/AdminLogin";
import AllDoctors from "./pages/admin/AllDoctors";
import Doctors from "./pages/Doctors";
import DocLogin from "./pages/Doctors/DocLogin";
import DocHome from "./pages/Doctors/DocHome"
import { useEffect, useState } from "react";
import api from "./api/axios";
import Protect from "./pages/Protect";
import DocDetail from "./pages/DocDetail";
import MyAppointmen from "./pages/MyAppointmen";
import About from "./pages/About";
import Contact from "./pages/Contact"

const App = () => {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
    { path: "/admin/login", element: <AdminLogin /> },
    { path: "/admin/dashboard", element: <AdminDashboard /> },
    { path: "/admin/addDoctor", element: <CreateDoctor /> },
    { path: "/admin/allDoctor", element: <AllDoctors /> },
    {
      path: "/doctors",
      element: (
        <Protect>
          <Doctors />
        </Protect>
      ),
    },
    {
      path:"/doctor/:id", element:<DocDetail/>
    },
    {path:"/doctor/login",element:<DocLogin/>},
    {path:"/doctor/Dashboard",element:<Protect>
      <DocHome/>
      </Protect>
    },
    {path:"/Myappointment",element:<MyAppointmen/>},
    {path:"/About", element:<About/>},
    {path:"/Contact", element:<Contact/>},
  ]);
  return <RouterProvider router={router} />;
};

export default App;
