import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/adminLayout';
import DataTable from "react-data-table-component";
import axios from 'axios';
import Swal from 'sweetalert2';

const LeftmenuList = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const columns = [
        { name: "Menu Name", selector: row => row.name, sortable: true },
        {
            name: "Status", selector: row => row.status == 1 ? 'Active' : 'In-active', sortable: true,
            cell: row => (
                <span className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${row.status === 1 ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"}`}
                    onClick={() => handleStatusChange(row._id, row.status)}
                    title="Click to change status"
                >
                    {row.status === 1 ? "Active" : "Inactive"}
                </span>

            )
        },
        { name: "Created At", selector: row => row.createdAt, sortable: true },
        { name: "Updated At", selector: row => row.updatedAt, sortable: true },
    ];

    const handleStatusChange = async (id, currentStatus) => {
        const newStatus = currentStatus === 1 ? 0 : 1;
        const title = currentStatus === 1 ? "Do you want to Inactivate the status?" : "Do you want to Activate the status?";
        const text = currentStatus === 1 ? "In-active" : "Active";
        const btnColor = currentStatus === 1 ? "#dc3545" : "#7ddc35";

        const result = await Swal.fire({
            title,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: text,
            confirmButtonColor: btnColor,
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.post(`http://localhost:5000/api/leftmenus/status/${id}`, { status: newStatus });
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: response.data.msg,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                setData(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
            } catch (error) {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "error",
                    title: error.response?.data?.msg || "Something went wrong",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        }
    };

    useEffect(() => {
        axios.get("http://localhost:5000/api/leftmenus/list")
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <AdminLayout>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border mb-4">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">Left Menu</h2>
                    <div className='flex gap-2'>
                        <button
                            type="button"
                            onClick={() => navigate('/leftmenu/add')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    pointerOnHover
                    striped
                    responsive
                />
            </div>
        </AdminLayout>
    );
}

export default LeftmenuList;
