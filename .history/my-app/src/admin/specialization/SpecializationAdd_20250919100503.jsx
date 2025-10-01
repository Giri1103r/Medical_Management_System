import React from 'react'
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate } from 'react-router-dom';
const SpecializationAdd = () => {
  return (
    <AdminLayout>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button
            onClick={() => navigate('/specialization')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-red-700"
          >
            Add
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

export default SpecializationAdd