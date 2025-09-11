import React from 'react'
import AdminLayout from './layouts/adminLayout'
import { UserContext } from './context/UserContext'


const Dashboard = () => {
  const users = UserContext
  return (
    <AdminLayout  title="Dashboard" >
      <div >Welcome to the dashboard</div>
    </AdminLayout>


  )
}

export default Dashboard