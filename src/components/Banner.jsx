import React from "react";
import { useNavigate } from "react-router";
const Banner = () => {
    const Navigate = useNavigate()
  return (
    <>
      <div className="md:bg-blue-700 w-250 h-120 rounded flex justify-between overflow-hidden">
       <div>
        <h1 
        className="text-white text-5xl leading-none pt-20 pl-20 font-semibold w-130">
          Book Appointment With Trusted  <br></br>Doctors
        </h1>
    
        
          <button onClick={()=>{
            Navigate('/doctors')
          }} className="text-black font-semibold mt-10 p-2 ml-20 bg-white rounded-full">
            Book Appointment → </button>
            </div>
          <img className="h-120 mt-15 p-10 " src="header_img.png"></img>
        </div>
        
     
    </>
  );
};

export default Banner;
