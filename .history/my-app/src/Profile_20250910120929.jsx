import React from 'react'
import AdminLayout from './layouts/adminLayout'
import { useForm } from 'react-hook-form'

const Profile = () => {
    const  {register,reset,watch,handleSubmit, formState: { errors, isSubmitting } = useForm()
    return (
        <AdminLayout title="Profile" >
            <div className="container">
                <form >
                    <div className="card p-3">
                       <div className="row">
                        <div className="col-md-12">
 <div className="col-md-4">
                            <label htmlFor="name">Name</label>
                            
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