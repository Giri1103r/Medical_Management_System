import React, { useContext } from 'react'
import AdminLayout from './layouts/adminLayout'
import { UserContext } from './context/UserContext'


const Dashboard = () => {
  const {} = useContext(UserContext);
  return (
    <AdminLayout  title="Dashboard" >
      <div >Welcome {users?.name}</div>
    </AdminLayout>


  )
}

export default Dashboard