import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axios";
import Navbar from "../components/Navbar";
const DocDetail = () => {
  const [Detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const DocFetch = async () => {
      const res = await api.get(`/api/user/Doctor/${id}`);
      setDetail(res.data);
    };
    DocFetch();
  }, []);
  const [slottime, setslottime] = useState("");
  const [slotdate, setslotdate] = useState(new Date());
  const [msg,setmsg]=useState("")
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const today = new Date(); //date
    today.setDate(today.getDate() + i);
    dates.push(today);
  }
  const time = [
    { hour: 9, label: "9 A.M" },
    { hour: 10, label: "10 A.M" },
    { hour: 11, label: "11 A.M" },
    { hour: 12, label: "12 P.M" },
    { hour: 13, label: "1 P.M" },
    { hour: 14, label: "2 P.M" },
    { hour: 15, label: "3 P.M" },
    { hour: 16, label: "4 P.M" },
    { hour: 17, label: "5 P.M" },
    {hour:18,label:"6 P.M"}
  ];
  const currenthour = new Date().getHours()
const isToday =()=>{
  const today = new Date().toDateString()
  if(slotdate.toDateString()==today){
    return true
  }
  else{
    return false
  }
}
const bookAppointment = async ()=>{
  try{
    const res = await api.post('/api/user/bookAppointment',{amount:Detail.fees,slotDate:slotdate,slotTime:slottime,doctorid:id})
    setmsg(res.data.message)

  }
  catch(err){
    setmsg(err.response.data.message)
    console.log(err)

  }
}


  return (
    <>
    <Navbar/>
     {Detail ? (
  <div className="min-h-screen bg-gray-100 py-10">

    {/* Doctor Details */}
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">

      <div className="md:w-1/3">
        <img
          src={Detail.image}
          alt={Detail.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-2/3 p-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Dr. {Detail.name}
        </h1>

        <p className="text-blue-600 text-lg mt-2">
          {Detail.specialization}
        </p>

        <p className="text-gray-500 mt-2">
          {Detail.qualification}
          {Detail.title && ` • ${Detail.title}`}
        </p>

        <hr className="my-5" />

        <h3 className="text-xl font-semibold mb-2">
          About Doctor
        </h3>

        <p className="text-gray-600 leading-7">
          {Detail.about}
        </p>

        <div className="mt-6">
          <span className="text-2xl font-bold text-green-600">
            ₹ {Detail.fees}
          </span>

          <span className="text-gray-500 ml-2">
            Consultation Fee
          </span>
        </div>

      </div>

    </div>

    {/* Booking Section */}

    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-center text-gray-800">
        Book Appointment
      </h2>

      {msg && (
        <p className="text-center text-blue-600 font-semibold mt-4">
          {msg}
        </p>
      )}

      {/* Dates */}

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => setslotdate(date)}
            className={`w-16 h-16 rounded-xl border transition ${
              slotdate.toDateString() === date.toDateString()
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            <p className="text-xs">
              {date.toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <p className="font-bold">
              {date.getDate()}
            </p>
          </button>
        ))}

      </div>

      {/* Time */}

      <div className="flex gap-3 overflow-x-auto mt-8 pb-2">

        {time.map((slot) => {
          const disabled = isToday() && slot.hour < currenthour;

          return (
            <button
              key={slot.hour}
              disabled={disabled}
              onClick={() => setslottime(slot.label)}
              className={`min-w-[90px] py-2 rounded-full transition ${
                disabled
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : slottime === slot.label
                  ? "bg-blue-600 text-white"
                  : "border hover:bg-blue-100"
              }`}
            >
              {slot.label}
            </button>
          );
        })}
      </div>

      {slottime && (
        <p className="text-center mt-6 text-gray-700">
          Selected:
          <span className="font-semibold text-blue-600">
            {" "}
            {slotdate.toLocaleDateString()} • {slottime}
          </span>
        </p>
      )}

      <div className="flex justify-center">
        <button
          onClick={bookAppointment}
          className="mt-8 bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </div>

    </div>

  </div>
) : (
  <div className="flex justify-center items-center h-screen">
    <h1 className="text-2xl font-semibold text-gray-600">
      Loading...
    </h1>
  </div>
)}
    </>
  );
};

export default DocDetail;
