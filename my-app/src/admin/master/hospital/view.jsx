import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ViewHospital = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, reset, watch, setValue, formState: { errors, isSubmitting } } = useForm();
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/location/getlocationname')
            .then(response => setLocations(response.data))
            .catch(error => console.error("Something went wrong:", error));
    }, []);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:5000/api/hospital/selectone/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                setValue("hospital_name", data.hospital_name);
                setValue("createdAt", new Date(data.createdAt).toLocaleString());
                setValue("status", data.status === 1 ? "Active" : "Inactive");
                setValue("location_id", data.location_id);
                reset(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching hospital:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [id, reset, setValue]);

    const location_id = watch("location_id");
    const LocationName = locations.find(loc => loc._id === location_id)?.location_name || "";

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <AdminLayout title="View Hospital">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">View Hospital</h2>
                    <button
                        onClick={() => navigate('/hospital')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto mt-6 px-4 bg-white shadow p-6 rounded-lg">
                <div className="mb-4">
                    <label className="font-bold">Location Name</label>
                    <p>{LocationName}</p>
                </div>
                <div className="mb-4">
                    <label className="font-bold">Hospital Name</label>
                    <p>{watch("hospital_name")}</p>
                </div>

                <div className="mb-4">
                    <label className="font-bold">Created At</label>
                    <p>{watch("createdAt")}</p>
                </div>

                <div className="mb-4">
                    <label className="font-bold">Status</label>
                    <p>{watch("status")}</p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ViewHospital;
