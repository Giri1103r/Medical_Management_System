import React from 'react'
import AdminLayout from './layouts/adminLayout'

const Profile = () => {
    return (
        <AdminLayout title="Profile" >
            <div className="container">
                <form >
                    <div className="card p-3">
                       <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="name"></label>
                        </div>
                       </div>
                    </div>
                </form>
            </div>
        </AdminLayout>

    )
}

export default Profile