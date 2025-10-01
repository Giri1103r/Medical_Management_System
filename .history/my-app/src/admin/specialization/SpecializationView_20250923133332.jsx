import React, { useEffect } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SpecializationView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/api/specialization/view/${id}`)
        if (id) {

            fetch(`http://localhost:5000/api/specialization/selectone/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok " + res.statusText);
                    }
                    return res.json();
                })
                .then((data) => {
                    setValue("name", data.name);
                    reset(data);
                })
                .catch((err) => console.error("Error fetching specialization:", err));
        }
    }, [id, reset]);


    return (
        <AdminLayout title="View Specialization">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">View Specialization</h2>
                    <button
                        onClick={() => navigate('/specialization')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Back
                    </button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-6 px-4">

            </div>
        </AdminLayout>



    )
}

export default SpecializationView