import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import api from '../api/axios'
const MyAppointmen = () => {

  const [appointment,setappointment] = useState([])
  const fetch = async ()=>{
    const response = await api.get('/api/user/MyAppointment')
    setappointment(response.data.userAppointment)
    
  }
  useEffect(()=>{
    fetch()
    
    
  },[])
  const cancel= async (id)=>{
    const response = await api.put(`/api/user/cancelAppointment/${id}`)
    fetch()

  }
  console.log(appointment)

  return (
   <>
  <Navbar />

  <div className="min-h-screen bg-gray-100 py-10 px-5">

    <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
      My Appointments
    </h1>

    <div className="flex flex-wrap justify-center gap-8">

      {appointment.map((data) => (
        <div
          key={data._id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-80 p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Dr. {data.doctorid.name}
          </h2>

          <div className="mt-5 space-y-3 text-gray-600">

            <p>
              <span className="font-semibold">📅 Date:</span>{" "}
              {new Date(data.slotDate).toLocaleDateString()}
            </p>

            <p>
              <span className="font-semibold">🕒 Time:</span>{" "}
              {data.slotTime}
            </p>

            <p>
              <span className="font-semibold">💰 Fees:</span> ₹
              {data.amount}
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              {data.cancelled ? (
                <span className="text-red-600 font-semibold">
                  Cancelled
                </span>
              ) : data.isComplete ? (
                <span className="text-green-600 font-semibold">
                  Completed
                </span>
              ) : (
                <span className="text-yellow-500 font-semibold">
                  Pending
                </span>
              )}
            </p>

          </div>

          {!data.cancelled && !data.isComplete && (
            <button
              onClick={() => cancel(data._id)}
              className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Cancel Appointment
            </button>
          )}
        </div>
      ))}

    </div>

    {appointment.length === 0 && (
      <h2 className="text-center text-gray-500 mt-20 text-xl">
        No appointments found.
      </h2>
    )}

  </div>
</>
  )
}

export default MyAppointmen
