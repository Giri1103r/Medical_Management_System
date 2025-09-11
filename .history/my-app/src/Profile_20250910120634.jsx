import React from 'react'
import AdminLayout from './layouts/adminLayout'

const Profile = () => {
    return (
        <AdminLayout title="Profile" >
          <div className="container">
            <form >               
                 <div className="card p-3">
                    <div className="row">
                        <h4 className='text-center'>Register</h4>
                        <div className='col-md-12 mb-2 form-input'>
                            <label htmlFor="name" className="form-label d-block text-start">Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter the Name"
                                {...register("name", {
                                    required: "Name is Required",
                                    minLength: { value: 3, message: "Name Atleast contains three characters" },
                                    maxLength: { value: 100, message: "Maximum Length should not Exceeds the 100" }
                                })}
                            />
                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                        </div>

                        <div className='col-md-12 mb-2 form-input'>
                            <label htmlFor="email" className="form-label d-block text-start">Email :</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter the Email"
                                className="form-control"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                        </div>

                        <div className='col-md-12 mb-2 form-input'>
                            <label htmlFor="password" className="form-label d-block text-start">Password :</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter the password"
                                className="form-control"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must contains 8 characters" }
                                })}
                            />
                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                        </div>

                        <div className="col-md-4 mx-auto">
                            <button type='submit' className='btn btn-primary ' disabled={isSubmitting}>Register</button>

                        </div>

                    </div>
                </div>
            </form>
          </div>
        </AdminLayout>

    )
}

export default Profile