// src/components/UserList.jsx
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import CommonTable from './CommonTable';

const UserList = () => {
  const { users } = useContext(DataContext);

  const headers = ['id', 'name', 'username', 'email', 'address'];

  // Flatten address for display
  const formattedUsers = users.map(user => ({
    ...user,
    address: `${user.address.street}, ${user.address.city}`,
  }));

  return (
    <div>
      <h2>Users</h2>
      <CommonTable headers={headers} data={formattedUsers} />
    </div>
  );
};

export default UserList;
