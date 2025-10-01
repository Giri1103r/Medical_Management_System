import React from 'react'
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";

const columns = [ 
  { name: "Name", selector: row => row.name, sortable: true, },
  { name: "Status", selector: row => row.status, sortable: true, },
  { name: "Created At", selector: row => row.createdAt, sortable: true, },
  { name: "Updated At", selector: row => row.updatedAt, sortable: true, },
];



const SpecializationList = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button
            onClick={() => navigate('/specialization/add')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

export default SpecializationList
