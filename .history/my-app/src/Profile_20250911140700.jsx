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
            <div className="container">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="card p-3">
                        <h4 className='text-center'>Profile</h4>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-4">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' id='name' className='form-control' placeholder="Enter the Name" {...register("name", {
                                        required: "Name is Required",
                                        minLength: { value: 3, message: "Minimum three characters required" },
                                        maxLength: { value: 100, message: "Maximum  characters should not exceeds the 100" },

                                    })} />
                                    {errors.name && <p>{name.errors.message}</p>}

                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" name='email' id='email' className='form-control' placeholder="Enter the email" {...register("email", {
                                        required: "Email is Required",
                                    })} />
                                    {errors.email && <p>{email.errors.message}</p>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="name">Phone number</label>
                                    <input type="text" name='phone_number' id='phone_number' className='form-control' placeholder="Enter the Phone Number" {...register("phone_number", {
                                        required: "Phone Number is Required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Phone number should be 10 digits"
                                        }
                                    })} />
                                    {errors.phone_number && <p>{phone_number.errors.message}</p>}
                                </div>
                                 <div className="col-md-4">
                                    <label htmlFor="name">Address</label>
                                   <textarea name="address" id="address" placeholder='Enter Your Address' className='form-control' {...register("address",{
required:"Address is required",
minLength:{}
                                   })}></textarea>
                                    {errors.phone_number && <p>{phone_number.errors.message}</p>}
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <button type='submit' className='btn btn-primary ' disabled={isSubmitting}>Update</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>

    )
}

export default Profile