import React from 'react'

const list = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const { control } = useForm();


    useEffect(() => {
        axios.get("http://localhost:5000/api/location/list")
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);


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
                const response = await axios.post(`http://localhost:5000/api/location/status/${id}`, { status: newStatus });
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

    // Delete specialization
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
                const response = await axios.delete(`http://localhost:5000/api/location/delete/${id}`);
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: response.data.msg,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                setData(prev => prev.filter(item => item._id !== id));
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

    // Data table columns
    const columns = [
        { name: "Name", selector: row => row.name, sortable: true },
        {
            name: "Status",
            selector: row => row.status === 1 ? 'Active' : 'Inactive',
            sortable: true,
            cell: row => (
                <span
                    className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${row.status === 1 ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"}`}
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
            name: "Actions",
            cell: row => (
                <div className="flex space-x-2">
                    <button className='text-blue-500 hover:text-blue-700' onClick={() => navigate(`/specialization/edit/${row._id}`)}>
                        <FaPenSquare size={20} />
                    </button>
                    <button className='text-blue-500 hover:text-blue-700' onClick={() => navigate(`/specialization/view/${row._id}`)}>
                        <FaEye size={20} />
                    </button>
                    <button className='text-red-500 hover:text-red-700' onClick={() => handleDelete(row._id)}>
                        <FaTrash size={20} />
                    </button>
                </div>
            )
        },
    ];

    const filteredData = data.filter(item =>
        item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border mb-4">
                <div className="p-2 flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">Location</h2>
                    <div className='flex gap-2'>
                        <button
                            type="button"
                            onClick={() => setShowFilter(!showFilter)}
                            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
                        >
                            Filter
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/specialization/add')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>


            {/* Collapsible filter panel */}
            <div
                className={`transition-max-height duration-500 overflow-hidden ${showFilter ? "max-h-96" : "max-h-0"}`}
            >
                <div className="p-6 bg-white border rounded-2xl shadow-md mb-4 flex flex-wrap gap-6 items-center">
                    {/* Specialization input */}
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <label htmlFor="specialization" className="whitespace-nowrap">Location</label>
                        <input
                            type="text"
                            className="block rounded-md border border-gray-300 px-2 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Status dropdown */}
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <label htmlFor="status" className="whitespace-nowrap">Status</label>
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        { value: 1, label: "Active" },
                                        { value: 2, label: "In-Active" }
                                    ]}
                                    value={[{ value: 1, label: "Active" }, { value: 0, label: "In-Active" }]
                                        .find(opt => opt.value === field.value) || null}
                                    placeholder="-- Select Status --"
                                    isClearable
                                    getOptionLabel={(option) => option.label}
                                    getOptionValue={(option) => option.value}
                                    className="w-100"

                                />
                            )}
                        />

                    </div>
                </div>
            </div>


            <div className="p-6">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="border rounded px-3 py-2 mb-3 w-64"
                    value={filterText}
                    onChange={e => setFilterText(e.target.value)}
                />

                <DataTable
                    title="Location"
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


export default list