import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useFlash } from '../../../context/FlashContext';
import { useEffect } from 'react';

const add = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm();
    const { flash } = useFlash();

    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);



    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post("http://localhost:5000/api/hospital/store", data, {
                headers: { 'Content-Type': 'application/json' }
            });
            navigate("/hospital", { state: { message: "Hospital Saved successfully!" } });


            console.log("Form Data:", res.data);
        } catch (err) {
            flash("something went wrong!", "error")
            navigate("/hospital")
            console.error("Error:", err);

        }

    };

    //  getting of location from backend
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/location/getLocationName");
                const result = await res.json();
                setData(result); // store API response in state
            } catch (err) {
                console.error("Something went wrong:", err);
            }
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const opts = data.map(item => ({
                label: item.location_name,
                value: item._id
            }));
            setOptions(opts);
        }
    }, [data]);


    return (
        <AdminLayout title="Hospital">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">Hospital</h2>
                    <button
                        onClick={() => navigate('/hospital')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Black
                    </button>
                </div>
            </div>

            <div>
                <div className="max-w-6xl mx-auto mt-6 px-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h4 className="text-center text-xl font-semibold mb-6">Hospital</h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        {...register("name", {
                                            required: "Name is required",

                                        })}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>


                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="block w-full rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        {...register("name", {
                                            required: "Name is required",

                                        })}
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
            </div>
        </AdminLayout>
    )

}

export default add