import React, { useContext, useEffect } from 'react'
import AdminLayout from './layouts/adminLayout'
import { UserContext } from './context/UserContext'

const Dashboard = () => {
  const { user } = useContext(UserContext);

  useEffect(()=>{
    console.log("User details:", user)
  })

  return (
    <AdminLayout title="Dashboard">
      <div>Welcome {user?.name}</div>
    </AdminLayout>
  );
};

export default Dashboard