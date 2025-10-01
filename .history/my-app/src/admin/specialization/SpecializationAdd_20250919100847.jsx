import React from 'react'
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate } from 'react-router-dom';
const SpecializationAdd = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout title="Add Specialization">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button
            onClick={() => navigate('/specialization')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Black
          </button>
        </div>
      </div>

      <div>
        <div className="max-w-6xl mx-auto mt-6 px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white shadow-md rounded-xl p-6">
              <h4 className="text-center text-xl font-semibold mb-6">Left Menu Add</h4>

             

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default SpecializationAdd