import React from "react";
import { Link } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl px-6">
        <Link
          to="/admin/addDoctor"
          className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Add Doctor
          </h2>
          <p className="text-gray-600">
            Register a new doctor to the MediCare system.
          </p>
        </Link>

        <Link
          to="/admin/allDoctor"
          className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Manage Doctors
          </h2>
          <p className="text-gray-600">
            View, manage, and remove registered doctors.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;