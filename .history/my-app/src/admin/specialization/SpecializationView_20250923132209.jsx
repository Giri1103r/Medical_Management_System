import React, { useEffect } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SpecializationView = () => {
  return (
    <AdminLayout title="View Specialization">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-800">View Specialization</h2>
            <button
              onClick={() => navigate('/specialization')}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Back
            </button>
          </div>
      </div>
    </AdminLayout>

    div.className="p-6">
  )
}

export default SpecializationView