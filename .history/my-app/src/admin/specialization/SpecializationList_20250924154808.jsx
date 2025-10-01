import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";
import axios from "axios";
import Swal from 'sweetalert2';
import { FaEye, FaPen, FaPenSquare, FaTrash } from "react-icons/fa";
const SpecializationList = () => {
  const navigate = useNavigate();


  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const columns = [
    { name: "Name", selector: row => row.name, sortable: true },
    {
      name: "Status", selector: row => (row.status === 1 ? 'Active' : 'In-active'), sortable: true, cell: row => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${row.status === 1 ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
          onClick={() => handleStatusChange(row._id, row.status)}
          title="Click to change status"
        >
          {row.status === 1 ? "Active" : "Inactive"}
        </span>
      )
    },
    { name: "Created At", selector: row => row.createdAt, sortable: true },
    { name: "Updated At", selector: row => row.updatedAt, sortable: true },
    {
      name: "Actions", cell: row => (
        <div className="flex space-x-2">
          <button className='text-blue-500 hover:text-blue-700 mx-2' onClick={() =>
            navigate(`/specialization/edit/${row._id}`)

          } >
            <FaPenSquare size={20} />
          </button>
          <button className='text-blue-500 hover:text-blue-700 mx-2' onClick={() =>

            navigate(`/specialization/view/${row._id}`)

          }
          >
            <FaEye size={20} />
          </button>
          <button className='text-red-500 hover:text-red-700' onClick={() => handleDelete(row._id)}
          >
            <FaTrash size={20}></FaTrash>
          </button>
        </div>
      )
    },
  ];


  // status
  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;

    const title =
      currentStatus === 1
        ? "Do you want to Inactivate the status?"
        : "Do you want to Activate the status?";

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
        const response = await axios.post(
          `http://localhost:5000/api/specialization/status/${id}`,
          { status: newStatus }
        );

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: response.data.msg,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        // ✅ update the row directly without re-fetch
        setData(prev =>
          prev.map(item =>
            item._id === id ? { ...item, status: newStatus } : item
          )
        );

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


  // delete

  const handleDelete = async (id) => {

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/specialization/delete/${id}`);

         Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: response.data.msg,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        const res = await axios.get(`http://localhost:5000/api/specialization/list`);
        setData(res.data);

      } catch (error) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title:,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    }
  };


  useEffect(() => {
    axios.get("http://localhost:5000/api/specialization/list")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


  const filteredData = data.filter(item =>
    item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
          <button
            onClick={() => navigate('/specialization/add')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Search box */}
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded px-3 py-2 mb-3 w-64"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />

        {/* DataTable */}
        <DataTable
          title="Specializations"
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          pointerOnHover
          striped
          responsive

        />
      </div>

    </AdminLayout>
  );
};

export default SpecializationList;
