import React from 'react'
import AdminLayout from '../../layouts/adminLayout';

const SpecializationList = () => {

  return (
    <AdminLayout>
      <div className=" rounded-2xl overflow-hidden shadow-lg bg-white border">
       
        <div className="p-2 flex items-center">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button className='float-end  me-2 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Add</button>
        </div>
      </div>

    </AdminLayout>
  )
}

export default SpecializationList