import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const Navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl bg-blue-700 rounded-xl flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden px-6 md:px-12 py-10 md:py-0">

      {/* Left */}
      <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment With Trusted
          <br />
          Doctors
        </h1>

        <button
          onClick={() => Navigate("/doctors")}
          className="bg-white text-black font-semibold rounded-full px-6 py-3 mt-8 self-center md:self-start"
        >
          Book Appointment →
        </button>
      </div>

      
      <div className="md:w-1/2 flex justify-center">
        <img
          src="header_img.png"
          alt="Doctors"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>

    </div>
  );
};

export default Banner;