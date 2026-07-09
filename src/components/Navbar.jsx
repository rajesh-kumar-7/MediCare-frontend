import React from "react";
import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(true);
  return (
    <>
      <div className="hidden h-10 md:w-full h-20 md:flex gap-30 items-center justify-center overflow-hidden ">
        <div className=" overflow-hidden w-25">
          <img
            src="logo_medicare.png"
            className="rounded w-full h-full  object-contain"
          />
        </div>
        <div className="gap-10 flex items-center justify-center">
          <Link to="/"> Home</Link>
          <Link to="/login"> All Doctors</Link>
          <Link to="/login"> About </Link>
          <Link to="/login"> Contact</Link>
        </div>
        <div>
          <button className="bg-blue-400 rounded-full text-white p-3">
            <Link to="/signup"> Create Account</Link>
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-between px-4 h-16 md:hidden">
        <div className="overflow-hidden h-10">

        <img
            src="logo_medicare.png"
            className="rounded w-full h-full  object-contain"
            />
            </div>
<button onClick={()=>{setopen(!open)}}> ☰</button>
      </div>
      {open&&(
          <div className="gap-10 flex flex-col items-center justify-center md:hidden">
          <Link to="/"> Home</Link>
          <Link to="/login"> All Doctors</Link>
          <Link to="/login"> About </Link>
          <Link to="/login"> Contact</Link>
        </div>

      )}

    </>
  );
};

export default Navbar;
