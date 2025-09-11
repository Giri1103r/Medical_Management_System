import React from 'react'
import { useForm } from 'react-hook-form'



const Register = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('https//localhost:5000/api' api / register)
        } catch (err) {
            return JSON()
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-12 mb-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' name='name' id='name' placeholder='Enter the Name' {...register("name", {
                        required: "Name is Required",
                        minLength: { value: 3, message: "Name Atleast contains three characters" },
                        maxLength: { value: 100, message: "Maximum Length should not Exceeds the 100" }
                    })} />
                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                </div>
                <div className='col-md-12 mb-2'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Enter the Email' className='form-control' {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>
                <div className='col-md-12 mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='Enter the password' className='form-control' {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must contains 8 characters" }
                    })} />
                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                </div>
                <button type='submit' className='btn btn-primary' disabled={isSubmitting}>Submit</button>

            </form>
        </div>
    )
}

export default Register