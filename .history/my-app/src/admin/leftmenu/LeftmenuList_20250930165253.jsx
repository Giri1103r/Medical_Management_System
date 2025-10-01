import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../layouts/adminLayout';

const LeftmenuList = () => {

    const navigate = useNavigate();
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
        </AdminLayout>
    );

}

export default LeftmenuList