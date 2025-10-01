import React from 'react'
import AdminLayout from '../../layouts/adminLayout';

const SpecializationList = () => {

  return (
    <AdminLayout>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border">
       
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2">
            This is a simple card built with TailwindCSS. You can customize padding,
            shadow, border radius, and background as you like.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>

    </AdminLayout>
  )
}

export default SpecializationList