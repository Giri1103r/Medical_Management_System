import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { UserContext } from './context/UserContext';

const Login = () => {
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post("http://localhost:5000/api/user/login", data);

            localStorage.setItem("token", res.data.token);

            const decoded = JSON.parse(atob(res.data.token.split(".")[1]));
            setUser({ id: decoded.id, name: decoded.name });

            navigate('/dashboard')

            console.log("Form Data:", res.data);
        } catch (err) {
            console.error("Error:", err);
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
                    <h4 className="text-center text-xl font-semibold mb-6">Login</h4>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter the Email"
                            className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password :
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter the password"
                            className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-3 mt-6">
                        <button
                            type="submit"
                            className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="px-5 py-2 bg-gray-200 text-gray-700 font-medium rounded-xl shadow hover:bg-gray-300"
                        >
                            Register
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login
