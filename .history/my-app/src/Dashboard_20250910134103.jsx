import React, { useContext } from 'react'
import AdminLayout from './layouts/adminLayout'
import { UserContext } from './context/UserContext'

const Dashboard = () => {
  const { user } = useContext(UserContext); // <- correct destructuring

  return (
    <AdminLayout title="Dashboard">
      <div>Welcome {user?.name}</div>
    </AdminLayout>
  );
};

export default Dashboard