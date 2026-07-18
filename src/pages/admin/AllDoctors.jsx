import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import DoctorComp from "../../components/DoctorComp";

const AllDoctors = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/api/admin/allDoctor");
      setAllDoctor(res.data.doctor);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">
          All Doctors
        </h1>
        <p className="text-gray-500 mt-2">
          View and manage all registered doctors.
        </p>
      </div>

    
      {allDoctor.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {allDoctor.map((doctor) => (
            <DoctorComp doctor={doctor} key={doctor._id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20">
          <p className="text-lg text-gray-500">
            No doctors available.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllDoctors;