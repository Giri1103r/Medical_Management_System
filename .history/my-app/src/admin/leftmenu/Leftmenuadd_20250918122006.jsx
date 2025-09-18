import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AdminLayout from "../../layouts/AdminLayout";
import { MasterdataContext } from '../../context/MasterdataContext';


const Leftmenuadd = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm();
    const { data, loading, fetchData } = useContext(MasterdataContext);
    const [menuList, setMenuList] = useState([]);

    // Fetch parent names
    useEffect(() => {
        if (!data['getParentName']) {
            fetchData('getParentName', 'http://localhost:5000/api/leftmenus/getparentName');
        }
    }, [data, fetchData]);

    // Form submit
    const onSubmit = (formData) => {
        console.log('Form Data:', formData);
        // Call your API to add left menu here
    };

    return (
        <AdminLayout title="Left Menu Add">
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h4 className="text-center text-xl font-semibold mb-6">Left Menu Add</h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Name"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name", {
                                        required: "Name is Required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Name Key */}
                            <div>
                                <label htmlFor="name_key" className="block text-sm font-medium text-gray-700">
                                    Name Key
                                </label>
                                <input
                                    type="text"
                                    id="name_key"
                                    placeholder="Enter Name key"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name_key", {
                                        required: "Name key is Required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                />
                                {errors.name_key && <p className="text-red-500 text-sm mt-1">{errors.name_key.message}</p>}
                            </div>

                            {/* Link */}
                            <div>
                                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                                    Link
                                </label>
                                <input
                                    type="text"
                                    id="link"
                                    placeholder="Enter Link"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("link", { required: "Link is Required" })}
                                />
                                {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>}
                            </div>

                            {/* Icon */}
                            <div>
                                <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                                    Icon
                                </label>
                                <input
                                    type="text"
                                    id="icon"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("icon")}
                                />
                            </div>

                            {/* Parent Menu Dropdown */}
                            <div>
                                <label htmlFor="parent_id" className="block text-sm font-medium text-gray-700">
                                    Parent Menu
                                </label>
                                <select
                                    id="parent_id"
                                    {...register("parent_id", { required: "Parent menu is required" })}
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    <option value="">-- Select Parent Menu --</option>
                                    {data['getParentName']?.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.parent_id && (
                                    <p className="text-red-500 text-sm mt-1">{errors.parent_id.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="meodule_id" className="block text-sm font-medium text-gray-700">
                                Is Module
                            </label>
                            <select
                                id="module_id"
                                {...register("module_id", { required: "Module menu is required" })}
                                className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                <option value="">-- Select Is Module  --</option>
                                <option value="0">0</option>
                                <option value="1">1</option>

                            </select>
                            {errors.module_id && (
                                <p className="text-red-500 text-sm mt-1">{errors.module_id.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="meodule_id" className="block text-sm font-medium text-gray-700">
                                Is Module
                            </label>
                            <select
                                id="module_id"
                                {...register("module_id", { required: "Module menu is required" })}
                                className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                <option value="">-- Select Is Module  --</option>
                                <option value="0">0</option>
                                <option value="1">1</option>

                            </select>
                            {errors.module_id && (
                                <p className="text-red-500 text-sm mt-1">{errors.module_id.message}</p>
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
      </div >
    </AdminLayout >
  );
};

export default Leftmenuadd;
