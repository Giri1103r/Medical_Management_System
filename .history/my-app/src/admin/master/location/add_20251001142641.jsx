import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useFlash } from '../../../context/FlashContext';
import { states, cities } from 'indian-states-cities';
import Select from 'react-select';
import { useState } from 'react';

const Add = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm();
    const { flash } = useFlash();

    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const stateOptions = states.map(s => ({ value: s.name, label: s.name }));
    const cityOptions = selectedState
        ? cities[selectedState.value].map(c => ({ value: c, label: c }))
        : [];

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:5000/api/location/store", data, {
                headers: { 'Content-Type': 'application/json' }
            });
            reset();
            flash("Location saved successfully!", "success");
            navigate("/location", { state: { message: "Location saved successfully!" } });
            console.log("Form Data:", res.data);
        } catch (err) {
            flash("Something went wrong!", "error");
            console.error("Error:", err);
        }
    };

    return (
        <AdminLayout title="Add Location">
            {/* Header */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border mb-4">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">Add Location</h2>
                    <button
                        onClick={() => navigate('/location')}
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
                        <h4 className="text-center text-xl font-semibold mb-6">Location Details</h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* State Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <Controller
                                    name="state"
                                    control={control}
                                    rules={{ required: "State is required" }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={stateOptions}
                                            value={selectedState}
                                            onChange={(val) => {
                                                field.onChange(val.value);
                                                setSelectedState(val);
                                                setSelectedCity(null); // reset city when state changes
                                            }}
                                            placeholder="Select State"
                                        />
                                    )}
                                />
                                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                            </div>

                            {/* City Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <Controller
                                    name="city"
                                    control={control}
                                    rules={{ required: "City is required" }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={cityOptions}
                                            value={selectedCity}
                                            onChange={(val) => {
                                                field.onChange(val.value);
                                                setSelectedCity(val);
                                            }}
                                            placeholder="Select City"
                                            isDisabled={!selectedState}
                                        />
                                    )}
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                            </div>

                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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

export default Add;
