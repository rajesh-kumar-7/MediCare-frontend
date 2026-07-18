import React, { useState, useEffect } from "react";
import api from "../../api/axios";

const DocHome = () => {
  const [appointments, setAppointments] = useState([]);

  const appointment = async () => {
    const res = await api.get("/api/Doctor/allAppointment");
    setAppointments(res.data.appointments);
  };

  useEffect(() => {
    appointment();
  }, []);

  const updateStatus = async (id, action) => {
    if (action === "done") {
      await api.put(`/api/Doctor/update/${id}`, {
        isComplete: true,
        cancelled: false,
      });
    }

    if (action === "cancel") {
      await api.put(`/api/Doctor/update/${id}`, {
        isComplete: false,
        cancelled: true,
      });
    }

    appointment();
  };
  console.log(appointments)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <h1 className="text-4xl font-bold text-center text-blue-600">
        Doctor Dashboard
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Manage your appointments
      </p>

      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-20">
          No appointments available.
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">

          {appointments.map((data) => (
            <div
              key={data._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-80 p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {data.userid.name}
              </h2>

              <div className="space-y-2 text-gray-600">

                <p>
                  <span className="font-semibold">📅 Date:</span>{" "}
                  {new Date(data.slotDate).toLocaleDateString()}
                </p>

                <p>
                  <span className="font-semibold">🕒 Time:</span>{" "}
                  {data.slotTime}
                </p>

                <p>
                  <span className="font-semibold">💰 Amount:</span> ₹
                  {data.amount}
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {data.isComplete ? (
                    <span className="text-green-600 font-semibold">
                      Completed
                    </span>
                  ) : data.cancelled ? (
                    <span className="text-red-600 font-semibold">
                      Cancelled
                    </span>
                  ) : (
                    <span className="text-yellow-500 font-semibold">
                      Pending
                    </span>
                  )}
                </p>

              </div>

              {!data.isComplete && !data.cancelled && (
                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => updateStatus(data._id, "done")}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Mark Complete
                  </button>

                  <button
                    onClick={() => updateStatus(data._id, "cancel")}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Cancel
                  </button>

                </div>
              )}
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default DocHome;