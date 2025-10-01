import React from 'react'
import AdminLayout from '../../layouts/adminLayout';
import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { set } from 'mongoose';

const columns = [
  { name: "Name", selector: row => row.name, sortable: true, },
  { name: "Status", selector: row => row.status, sortable: true, },
  { name: "Created At", selector: row => row.createdAt, sortable: true, },
  { name: "Updated At", selector: row => row.updatedAt, sortable: true, },
];



const SpecializationList = () => {
  const navigate = useNavigate();

  const data = [data, SetData] = useState([]);

  const filter = [filter, setFilterText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/specialization/list")
      .then((response) => {
        SetData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const filteredItems = data.filter(item.name && item.name.toLowerCase().includes(filter.toLowerCase()));




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
          title="Users"
          columns={columns}
          data={filteredData}
          pagination        
          highlightOnHover  
          pointerOnHover
          striped
          responsive
          defaultSortFieldId={1}
        />
      </div>
    </AdminLayout>
  )
}

export default SpecializationList
