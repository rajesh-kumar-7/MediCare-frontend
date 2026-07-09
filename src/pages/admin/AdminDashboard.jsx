import React from 'react'
import {useNavigate,Link} from 'react-router'

const AdminDashboard = () => {
  return (
    <>
    <div className='flex  justify-center mt-10 text-blue-400' >
        <h1> ADMIN PANEL</h1>
    </div>
    <div className='flex flex-col ml-10 gap-2'>
        <h1 className='border rounded w-fit p-2'><Link to='/admin/addDoctor'>Add Doctor</Link></h1>
        <h1 className='border rounded w-fit p-2'><Link to='/admin/allDoctor'>See doctor</Link></h1>
    </div>
    </>
  )
}

export default AdminDashboard
