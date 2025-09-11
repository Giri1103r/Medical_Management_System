import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Register = () => {
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post("http://localhost:5000/api/register", data);

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

                    </div>
                </div>
               

            </form>
        </div>
    )
}

export default Register