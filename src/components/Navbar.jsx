import React from "react";
import { Link ,useNavigate} from "react-router";
import { useState,useEffect } from "react";
import api from "../api/axios";

const Navbar = () => {
  const Navigate = useNavigate()
  const [open, setopen] = useState(false);
  const [isLog,setisLog]=useState(false)
  const [profileOpen,setprofileOpen]=useState(false)
  useEffect(()=>{
    const res= async()=>{
      const response = await api.get("/api/user/me")
    if(!response){
      setisLog(false)
    }
    else{
      setisLog(true)
    }}
    res()
  },[])
  const logout = async ()=>{
    const response = await api.get("/api/user/Logout")
    Navigate('/login')
  }
 
  return (

    <>
    
      <div className="hidden h-10 md:w-full h-20 md:flex gap-30 items-center justify-center  ">
        <div className=" overflow-hidden h-20 w-25">
          <img
            src="/logo_medicare.png"
            className="rounded w-full object-contain"
          />
        </div>
        <div className="gap-10 flex font-semibold items-center justify-center">
          <Link to="/"> Home</Link>
          <Link to="/doctors"> All Doctors</Link>
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact</Link>
        </div>
        {isLog?
        <>
        <div className="relative">
          
        <div className="overflow-hidden w-[50px] rounded-full">
          <img onClick={()=>setprofileOpen(!profileOpen)} src="upload_area.png"></img>
          
        </div>
         {profileOpen&&(<>
         <div className="flex top-full w-[130px] p-2 mt-4 bg-gray-200 items-center text-black font-semibold rounded absolute flex-col">
          <Link to='/Myappointment'>Appointments</Link>
          <Link onClick={logout}>Logout</Link>
         </div>
         </>)}
        </div>
        </>:
        <div>
          <button className="bg-blue-700 rounded-full text-white p-3">
            <Link to="/signup"> Create Account</Link>
          </button>
        </div>
        }
      </div>
      <div className=" flex items-center justify-between px-4 h-16 md:hidden">
        <div className="overflow-hidden h-10">

        <img
            src="/logo_medicare.png"
            className="rounded w-full h-full  object-contain"
            />
            </div>
<button onClick={()=>{setopen(!open)}}> ☰</button>
      </div>
      {open&&(
          <div className="gap-10 flex flex-col items-center justify-center md:hidden">
          <Link to="/"> Home</Link>
          <Link to="/doctors">All Doctors</Link>
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact</Link>
        </div>

      )}

    </>
  );
};

export default Navbar;
