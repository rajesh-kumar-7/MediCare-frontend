import React from "react";
import api from "../api/axios";

const DoctorComp = ({ doctor }) => {
  const deletedoc = async () => {
    await api.delete(`/api/admin/deleteDoctor/${doctor._id}`);
    alert("Doctor deleted successfully");
    window.location.reload();
  };

  return (
    <div className="bg-white w-72 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {doctor.name}
        </h2>

        <p className="text-blue-600 font-medium mt-1">
          {doctor.specialization}
        </p>

        <div className="mt-4 space-y-2 text-gray-600">
          <p>
            <span className="font-semibold">📞 Phone:</span> {doctor.phone}
          </p>

          <p>
            <span className="font-semibold">🎓 Qualification:</span>{" "}
            {doctor.qualification}
          </p>

          <p>
            <span className="font-semibold">💰 Fees:</span> ₹{doctor.fees}
          </p>
        </div>

        <button
          onClick={deletedoc}
          className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete Doctor
        </button>
      </div>
    </div>
  );
};

export default DoctorComp;