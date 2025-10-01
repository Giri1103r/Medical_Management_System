import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SpecializationView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/specialization/selectone/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
       setVa
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching specialization:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

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

      <div className='max-fw-12xl mx-auto mt'>

      </div>

      
    </AdminLayout>
  );
}

export default SpecializationView;
