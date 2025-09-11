import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post("http://localhost:5000/api/user/register", data);

            navigate('/login')

            console.log("Form Data:", res.data);
        } catch (err) {
            console.error("Error:", err);
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card px-3">
                    <div className="row">
                       
                        <div className='col-md-12 mb-2'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Enter the Email' className='form-control' {...register("email", { required: "Email is required" })} />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                        </div>
                        <div className='col-md-12 mb-2'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Enter the password' className='form-control' {...register("password", {
                                required: "Password is required",
                            })} />
                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                        </div>
                        <div className="col-md-4 mx-auto">
                            <button type='submit' className='btn btn-primary' disabled={isSubmitting}>Login</button>

                        </div>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Login
