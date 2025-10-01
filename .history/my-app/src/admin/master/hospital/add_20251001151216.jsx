import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useFlash } from '../../../context/FlashContext';
import { useState, useEffect } from 'react';
import Select from 'react-select';

const AddHospital = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm();
  const { flash } = useFlash();

  const [locations, setLocations] = useState([]);
  const [options, setOptions] = useState([]);

  // Fetch locations from API
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/location/getLocationName");
        const data = await res.json();
        setLocations(data || []);
      } catch (err) {
        console.error("Something went wrong while fetching locations:", err);
      }
    };
    fetchLocation();
  }, []);

  // Convert locations to select options
  useEffect(() => {
    if (locations.length > 0) {
      const opts = locations.map(item => ({
        label: item.location_name,
        value: item._id
      }));
      setOptions(opts);
    }
  }, [locations]);

  // Form submit handler
  const onSubmit = async (formData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/hospital/store", formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      reset();
      flash("Hospital saved successfully!", "success");
      navigate("/hospital", { state: { message: "Hospital saved successfully!" } });
      console.log("Form Data:", res.data);
    } catch (err) {
      flash("Something went wrong!", "error");
      console.error("Error:", err);
    }
  };

  return (
    <AdminLayout title="Add Hospital">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border mb-4">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Hospital</h2>
          <button
            onClick={() => navigate('/hospital')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Back
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-center text-xl font-semibold mb-6">Hospital Details</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Location Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <Controller
                  control={control}
                  name="location_id"
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={options || []}
                      placeholder="Select Location"
                    />
                  )}
                />
                {errors.location_id && <p className="text-red-500 text-sm mt-1">{errors.location_id.message}</p>}
              </div>

              {/* Hospital Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
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

export default AddHospital;
