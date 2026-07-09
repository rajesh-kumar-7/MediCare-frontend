import React from 'react'
import api from '../api/axios'

const DoctorComp = ({doctor}) => {
    const deletedoc = async()=>{
        const res = await api.delete(`/api/admin/deleteDoctor/${doctor._id}`)
        alert("deleted")
        window.location.reload()


    }
  return (
    <>
    <div className='border w-fit p-2 gap-2 m-2 flex flex-col items-center justify-center' >
        <img className="w-50" src={doctor.image}/>
        <p>Name:{doctor.name}</p>
        <p>Phone:{doctor.phone}</p>
        <p>Qualification:{doctor.qualification}</p>
        <button className="border text-red-400 rounded-full p-1  text-center"  onClick={deletedoc}>Delete Doctor</button>

    </div>
    </>
  )
}

export default DoctorComp
