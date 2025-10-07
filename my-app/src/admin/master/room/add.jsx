import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useFlash } from '../../../context/FlashContext';
import Select from 'react-select';

const AddDepartment = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm();
    const { flash } = useFlash();
    const [hospitals, setHospitals] = useState([]);
    const [options, setOptions] = useState([]);

    // Fetch hospitals on component mount
    useEffect(() => {
        axios.get('http://localhost:5000/api/hospital/gethospitalName')
            .then(response => {
                setHospitals(response.data);
            })
            .catch(error => console.error("Error fetching hospitals:", error));
    }, []);

    // Map hospitals to react-select options
    useEffect(() => {
        if (hospitals.length > 0) {
            const opts = hospitals.map(item => ({
                value: item._id,
                label: item.hospital_name
            }));
            setOptions(opts);
        }
    }, [hospitals]);

    // Form submission
    const onSubmit = async (data) => {
        try {
            // data.hospital_id will contain the hospital _id
            const res = await axios.post(
                "http://localhost:5000/api/room/store",
                data,
                { headers: { 'Content-Type': 'application/json' } }
            );
            reset();
            navigate("/room", { state: { message: "Department saved successfully!" } });
        } catch (err) {
            flash("Something went wrong!", "error");
            console.error("Error:", err);
        }
    };

    return (
        <AdminLayout title="Department">
            {/* Header */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">Room</h2>
                    <button
                        onClick={() => navigate('/room')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Back
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h4 className="text-center text-xl font-semibold mb-6">Add Room</h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Hospital Name */}
                            <div>
                                <label htmlFor="hospital_id" className="block text-sm font-medium text-gray-700">
                                    Hospital Name
                                </label>

                                <Controller
                                    control={control}
                                    name="hospital_id"
                                    rules={{ required: "Hospital is required" }}
                                    render={({ field }) => {
                                        const selectedOption = options.find(opt => opt.value === field.value) || null;
                                        return (
                                            <Select
                                                options={options}
                                                value={selectedOption}
                                                placeholder="-- Select Hospital --"
                                                isClearable
                                                onChange={(selected) => field.onChange(selected?.value)}
                                            />
                                        );
                                    }}
                                />
                                {errors.hospital_id && (
                                    <p className="text-red-500 text-sm mt-1">{errors.hospital_id.message}</p>
                                )}
                            </div>

                            {/* Department Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Department Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AddDepartment;
