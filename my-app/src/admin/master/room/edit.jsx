import React, { useEffect } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();


  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();


  useEffect(() => {
    if (id) {
    
      fetch(`http://localhost:5000/api/room/selectone/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok " + res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setValue("name", data.room_name);
          reset(data);
        })
        .catch((err) => console.error("Error fetching room:", err));
    }
  }, [id, reset]);





  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/room/update/${id}`, data, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log("Updated:", res.data);
        navigate("/room", { state: { message: "Department Updated successfully!" } });

      console.log("Form Data:", res.data);
    } catch (err) {
      flash("something went wrong!","error")
      navigate("/room")
      console.error("Error:", err);
    }
  };

  return (
    <AdminLayout title="Edit Department">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Edit Department</h2>
          <button
            onClick={() => navigate('/room')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Back
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-center text-xl font-semibold mb-6">Department</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name='name '
                  placeholder="Enter Name"
                  className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>


            </div>

            {/* Submit */}
            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default edit;
