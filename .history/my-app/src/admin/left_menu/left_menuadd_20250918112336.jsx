import React, { use, useState } from 'react'

const left_menuadd = () => {

    const [menuList, setMenuList] = useState([]);

    const { register, reset, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const {data,loading,fetchdata } = useContext(MasterdataContext);

  useEffect(() => {
    if(data['getparentName']){
        fetchdata('getparentName','http://localhost:5000//api/leftmenus/getparentName')
    }
    }, [getparentName]);

   return (
        <AdminLayout title="Left Menu Add">
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <form onSubmit={handleSubmit(onsubmit)}>
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
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("name", {
                                        required: "Name is Required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                                    Name key
                                </label>
                                <input
                                    type="name_key"
                                    id="name_key"
                                    placeholder="Enter Name key"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("name_key", { required: "Name key is Required",
                                        minLength: { value: 3, message: "Minimum 3 characters required" },
                                        maxLength: { value: 100, message: "Maximum 100 characters allowed" },
                                    })}
                                />
                                {errors.name_key && <p className="text-red-500 text-sm mt-1">{errors.name_key.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                    Link
                                </label>
                                <input
                                    type="text"
                                    id="link"
                                    placeholder="Enter Link"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("link", {required: "Link is Required" })}
                                />
                                {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link.message}</p>}
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                                    Icon
                                </label>
                                <input
                                    type="icon"
                                    id="icon"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                
                            </div>

                           {/* Parent id */}

                           
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>

    )
 
}

export default left_menuadd