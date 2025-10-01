import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AdminLayout from '../../layouts/AdminLayout';
import { MasterdataContext } from '../../context/MasterdataContext';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useFlash } from '../../context/FlashContext';

const Leftmenuadd = () => {
    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm();
    const { data, fetchData } = useContext(MasterdataContext);

    const { flash } = useFlash();

    const navigate = useNavigate();

    const [parentOptions, setParentOptions] = useState([]);
    const [moduleOptions] = useState([
        { value: 0, label: '0' },
        { value: 1, label: '1' },
    ]);
    const [isParentOptions] = useState([
        { value: 0, label: '0' },
        { value: 1, label: '1' },
    ]);
    const [sortOrderOptions] = useState(
        Array.from({ length: 100 }, (_, i) => ({ value: i + 1, label: String(i + 1) }))
    );

    // Fetch parent menus from backend
    useEffect(() => {
        if (!data['getParentName']) {
            fetchData('getParentName', 'http://localhost:5000/api/leftmenus/getparentName');
        }
    }, [data, fetchData]);

    useEffect(() => {
        if (data['getParentName']) {
            const options = data['getParentName'].map((item) => ({
                value: item._id,
                label: item.name,
            }));
            setParentOptions(options);
        }
    }, [data]);

    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post("http://localhost:5000/api/leftmenus/store", data, {
                headers: { 'Content-Type': 'application/json' }
            });

            navigate("/leftmenu", { state: { message: "Leftmenu Created successfully!" } });

            console.log("Form Data:", res.data);
        } catch (err) {
            flash("Something Went Wrong Please Try again afterSometime", "error")
            navigate('')
            console.error("Error:", err);
        }

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
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name", { required: "Name is required", minLength: 3, maxLength: 100 })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Name Key */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name Key</label>
                                <input
                                    type="text"
                                    name='name_key'
                                    placeholder="Enter Name key"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("name_key", { required: "Name key is required", minLength: 3, maxLength: 100 })}
                                />
                                {errors.name_key && <p className="text-red-500 text-sm mt-1">{errors.name_key.message}</p>}
                            </div>

                            {/* Link */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Link</label>
                                <input
                                    type="text"
                                    name='link'
                                    placeholder="Enter Link"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("link", { required: "Link is required" })}
                                />
                                {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>}
                            </div>

                            {/* Icon */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Icon</label>
                                <input
                                    type="text"
                                    name='icon'
                                    placeholder="Enter Icon"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    {...register("icon")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mod Key</label>
                                <input
                                    type="text"
                                    name='mod_key'
                                    placeholder="Enter Mod Key"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"

                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Permission</label>
                                <input
                                    type="text"
                                    name='permission'
                                    placeholder="Enter Permission"
                                    className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"

                                />
                            </div>

                            {/* Parent Menu */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Parent Menu</label>
                                <Controller
                                    name="parent_id"
                                    control={control}
                                    rules={{ required: "Parent menu is required" }}
                                    render={({ field }) => {
                                        const selectedOption = parentOptions.find(opt => opt.value === field.value) || null;
                                        return (
                                            <Select
                                                {...field}
                                                options={parentOptions}
                                                value={selectedOption}
                                                placeholder="-- Select Parent Menu --"
                                                isClearable
                                                onChange={(selected) => field.onChange(selected?.value)}
                                            />
                                        );
                                    }}
                                />
                                {errors.parent_id && <p className="text-red-500 text-sm mt-1">{errors.parent_id.message}</p>}
                            </div>

                            {/* Is Module */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Is Module</label>
                                <Controller
                                    name="module_id"
                                    control={control}
                                    rules={{ required: "Module menu is required" }}
                                    render={({ field }) => {
                                        const selectedOption = moduleOptions.find(opt => opt.value === field.value) || null;
                                        return (
                                            <Select
                                                {...field}
                                                options={moduleOptions}
                                                value={selectedOption}
                                                placeholder="-- Select Is Module --"
                                                onChange={(selected) => field.onChange(selected?.value)}
                                            />
                                        );
                                    }}
                                />
                                {errors.module_id && <p className="text-red-500 text-sm mt-1">{errors.module_id.message}</p>}
                            </div>

                            {/* Is Parent */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Is Parent</label>
                                <Controller
                                    name="is_parent"
                                    control={control}
                                    rules={{ required: "Is Parent is required" }}
                                    render={({ field }) => {
                                        const selectedOption = isParentOptions.find(opt => opt.value === field.value) || null;
                                        return (
                                            <Select
                                                {...field}
                                                options={isParentOptions}
                                                value={selectedOption}
                                                placeholder="-- Select Is Parent --"
                                                onChange={(selected) => field.onChange(selected?.value)}
                                            />
                                        );
                                    }}
                                />
                                {errors.is_parent && <p className="text-red-500 text-sm mt-1">{errors.is_parent.message}</p>}
                            </div>

                            {/* Sort Order */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Sort Order</label>
                                <Controller
                                    name="sort_order"
                                    control={control}
                                    rules={{ required: "Sort Order is required" }}
                                    render={({ field }) => {
                                        const selectedOption = sortOrderOptions.find(opt => opt.value === field.value) || null;
                                        return (
                                            <Select
                                                {...field}
                                                options={sortOrderOptions}
                                                value={selectedOption}
                                                placeholder="-- Select Sort Order --"
                                                onChange={(selected) => field.onChange(selected?.value)}
                                            />
                                        );
                                    }}
                                />
                                {errors.sort_order && <p className="text-red-500 text-sm mt-1">{errors.sort_order.message}</p>}
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

export default Leftmenuadd;
