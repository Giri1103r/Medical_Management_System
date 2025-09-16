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

        <div className="flex h-screen">
  {/* 3/4 image */}
  <div className="w-3/4">
    <img 
      src="/images/sample.jpg" 
      alt="Sample" 
      className="w-full h-full object-cover" 
    />
  </div>

  {/* 1/4 content */}
  <div className="w-1/4 flex items-center justify-center p-6 bg-gray-100">
    <h1 className="text-xl font-semibold">Content Area</h1>
  </div>
</div>

        <div>
          
        </div>
    )
}

export default Login
