import React, { useState, useEffect } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  useEffect(() => {
    const fetchDoc = async () => {
      const docs = await api.get("api/user/allDoctor");
      setDoctors(docs.data.doctors);
    };

    fetchDoc();
  }, []);

  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter(
          (doc) => doc.specialization === selectedSpecialization
        );

  return (
    <>
      <Navbar />

      <div className="flex flex-wrap gap-3 p-4 justify-center">
        {[
          "All",
          "Cardiologist",
          "Dentist",
          "Neurologist",
          "Orthopedic",
          "Pediatrician",
          "Dermatologist",
          "General Physician",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setSelectedSpecialization(item)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedSpecialization === item
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-5">
        {filteredDoctors.map((doc) => (
          <Link to={`/doctor/${doc._id}`} key={doc._id}>
            <div className="border rounded-lg shadow-md overflow-hidden w-[220px] p-3 hover:shadow-xl transition">
              <img
                className="w-full h-52 object-cover rounded"
                src={doc.image}
                alt={doc.name}
              />

              <h2 className="text-lg font-semibold mt-3">{doc.name}</h2>

              <p className="text-blue-600 font-medium">
                {doc.specialization}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Doctors;