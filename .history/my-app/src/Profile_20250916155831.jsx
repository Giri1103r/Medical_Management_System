import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './layouts/adminLayout'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import api from './api';
import { UserContext } from './context/UserContext';

const Profile = () => {
    const { register, reset, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const { setUser } = useContext(UserContext);

    const [otherUsers, setOtherUsers] = useState([]);

    useEffect(() => {
        if (setUser?.id) {
            api.get(`/users/others/${setUser.id}`)
                .then((res) => setOtherUsers(res.data))
                .catch((err) => console.error(err));
        }
    }, [setUser]);
    const onSubmit = async (data) => {

        const res = await api.post('user/profile', data)

    }
    return (
     <AdminLayout title="Profile">
  <div className="max-w-6xl mx-auto mt-6 px-4">
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-center text-xl font-semibold mb-6">Profile</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("name", {
                required: "Name is Required",
                minLength: { value: 3, message: "Minimum 3 characters required" },
                maxLength: { value: 100, message: "Maximum 100 characters allowed" },
              })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("email", { required: "Email is Required" })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              placeholder="Enter Phone Number"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("phone_number", {
                required: "Phone Number is Required",
                pattern: { value: /^[0-9]{10}$/, message: "Phone number should be 10 digits" },
              })}
            />
            {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  className="text-indigo-600 focus:ring-indigo-500"
                  {...register("gender", { required: "Gender is required" })}
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  className="text-indigo-600 focus:ring-indigo-500"
                  {...register("gender", { required: "Gender is required" })}
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter Your Address"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("address", {
                required: "Address is required",
                minLength: { value: 3, message: "Minimum 3 characters required" },
                maxLength: { value: 100, message: "Maximum 100 characters allowed" },
              })}
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
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

    )
}

export default Profile