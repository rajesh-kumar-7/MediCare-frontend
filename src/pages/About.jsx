import React from "react";
import { FaUserMd, FaHeartbeat, FaClock, FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700">
            About <span className="text-gray-800">MediCare</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            MediCare is an online doctor appointment booking platform that
            connects patients with trusted healthcare professionals. Our mission
            is to make quality healthcare accessible, convenient, and stress-free.
          </p>
        </div>

     
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://img.magnific.com/premium-photo/group-doctors-standing-front-hospital-room_889227-23144.jpg?w=2000"
            alt="Doctor"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              MediCare is designed to simplify the healthcare experience.
              Patients can search for doctors, book appointments online, and
              manage their bookings from one platform. Doctors can efficiently
              manage appointments and provide better patient care.
            </p>

            <p className="text-gray-600 leading-8">
              We believe technology should make healthcare easier. Whether you
              need a routine consultation or specialist advice, MediCare helps
              you connect with the right doctor in just a few clicks.
            </p>
          </div>
        </div>

      </div>
    </div>
            </>
  );
};

export default About;