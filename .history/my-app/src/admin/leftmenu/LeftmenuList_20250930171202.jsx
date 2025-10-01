import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/adminLayout';
import DataTable from "react-data-table-component";
import axios from 'axios';

const LeftmenuList = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const columns = [
        { name: "Menu Name", selector: row => row.name, sortable: true },
        { name: "Status", selector: row => row.status == 1 ? 'Active' : 'In-active', sortable: true },
        { name: "Created At", selector: row => row.createdAt, sortable: true },
        { name: "Updated At", selector: row => row.updatedAt, sortable: true },
    ];

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
