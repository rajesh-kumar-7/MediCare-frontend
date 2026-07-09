import React from 'react'
import api from '../../api/axios'
import {useState,useEffect} from 'react'
import DoctorComp from '../../components/DoctorComp'
const AllDoctors = () => {
    const [allDoctor,setallDoctor] = useState([])
    useEffect(()=>{
        const fetchdata = async ()=>{
       const res= await api.get('/api/admin/allDoctor')
       setallDoctor(res.data.doctor)
       console.log(allDoctor) }
     fetchdata()
    },[])
    
  return (
    <>
    <h1 className='flex justify-center mt-10 text-xl text-blue-400'>All Doctors</h1>
    <div className='flex flex-wrap'>
        {allDoctor.map((doctor)=>{
            return  <DoctorComp doctor={doctor} key={doctor._id} />
            
        })}
      
    </div>
        </>
  )
}

export default AllDoctors
