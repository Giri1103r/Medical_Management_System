import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeftmenuList = () => {

    const navigate = useNavigate();
 return (
    <AdminLayout>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border mb-4">
        <div className="p-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">Specialization</h2>
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
            <label htmlFor="specialization" className="whitespace-nowrap">Specialization</label>
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
 
}

export default LeftmenuList