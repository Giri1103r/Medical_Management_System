import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const view = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, reset, watch, setValue, formState: { errors, isSubmitting } } = useForm();

    

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:5000/api/designation/selectone/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                setValue("name", data.name);
                setValue("createdAt", new Date(data.createdAt).toLocaleString());
                setValue("status", data.status === 1 ? "Active" : "Inactive");
                reset(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching designation:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);



    return (
        <AdminLayout title="View Department">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">View Department</h2>
                    <button
                        onClick={() => navigate('/designation')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto mt-6 px-4 bg-white shadow p-6 rounded-lg">
                <div className="mb-4">
                    <label className="font-bold">Department Name</label>
                    <p>{watch("designation_name")}</p>
                </div>

                <div className="mb-4">
                    <label className="font-bold">Created At</label>
                    <p>{watch("createdAt")}</p>
                </div>

                <div className="mb-4">
                    <label className="font-bold">Status</label>
                    <p>
                        {watch("status") === 1 ? "Active" : "Inactive"}
                    </p>
                </div>

            </div>



        </AdminLayout>
    );
}

export default view;
