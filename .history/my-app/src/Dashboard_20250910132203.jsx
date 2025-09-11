import React from 'react'
import AdminLayout from './layouts/adminLayout'
import { UserContext } from './context/UserContext'


const Dashboard = () => {
  const users = UserContext(UserContext);
  return (
    <AdminLayout  title="Dashboard" >
      <div >Welcome {users.name}</div>
    </AdminLayout>


  )
}

export default Dashboard