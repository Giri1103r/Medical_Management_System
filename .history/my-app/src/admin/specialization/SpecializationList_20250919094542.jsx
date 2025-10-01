import React from 'react'
import AdminLayout from '../../layouts/adminLayout';

const SpecializationList = () => {

  return (
    <AdminLayout>
      <div className=" rounded-2xl overflow-hidden shadow-lg bg-white border">
       
        <div className="p-2">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button className='a'>Add</button>
        </div>
      </div>

    </AdminLayout>
  )
}

export default SpecializationList