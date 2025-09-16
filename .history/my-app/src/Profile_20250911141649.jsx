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
        <AdminLayout title="Profile" >
            <div className="container mt-4">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="card p-4">
                        <h4 className="text-center mb-4">Profile</h4>

                        <div className="row g-3">
                            {/* Name */}
                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label fw-bold">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    {...register("name", {
                                        required: "Name is Required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                />
                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label fw-bold">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    {...register("email", { required: "Email is Required" })}
                                />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div className="col-md-4">
                                <label htmlFor="phone_number" className="form-label fw-bold">Phone Number</label>
                                <input
                                    type="text"
                                    id="phone_number"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    {...register("phone_number", {
                                        required: "Phone Number is Required",
                                        pattern: { value: /^[0-9]{10}$/, message: "Phone number should be 10 digits" },
                                    })}
                                />
                                {errors.phone_number && <p className="text-danger">{errors.phone_number.message}</p>}
                            </div>

                            {/* Date of Birth */}
                            <div className="col-md-4">
                                <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dob"
                                    className="form-control"
                                    {...register("dob", { required: "Date of Birth is required" })}
                                />
                                {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
                            </div>

                            {/* Gender */}
                            <div className="col-md-4">
                                <label className="form-label fw-bold d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="male"
                                        value="Male"
                                        className="form-check-input"
                                        {...register("gender", { required: "Gender is required" })}
                                    />
                                    <label htmlFor="male" className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="female"
                                        value="Female"
                                        className="form-check-input"
                                        {...register("gender", { required: "Gender is required" })}
                                    />
                                    <label htmlFor="female" className="form-check-label">Female</label>
                                </div>
                                {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                            </div>

                            {/* Address */}
                            <div className="col-md-8">
                                <label htmlFor="address" className="form-label fw-bold">Address</label>
                                <textarea
                                    id="address"
                                    className="form-control"
                                    placeholder="Enter Your Address"
                                    {...register("address", {
                                        required: "Address is required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                ></textarea>
                                {errors.address && <p className="text-danger">{errors.address.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="col-12 text-center mt-3">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </AdminLayout>

    )
}

export default Profile