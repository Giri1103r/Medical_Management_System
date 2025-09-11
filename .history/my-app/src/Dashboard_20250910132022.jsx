import React from 'react'
import AdminLayout from './layouts/adminLayout'


const Dashboard = () => {
  const users = User
  return (
    <AdminLayout  title="Dashboard" >
      <div >Welcome to the dashboard</div>
    </AdminLayout>


  )
}

export default Dashboard