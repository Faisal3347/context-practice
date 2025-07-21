// src/components/UserList.jsx
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import CommonTable from './CommonTable';

const UserList = () => {
  const { users } = useContext(DataContext);

const headers = ['srNo', 'name', 'email', 'phone'];

 const formattedUsers = users.map((user, index) => ({
  srNo: index + 1,
  name: user.name,
  email: user.email,
  phone: user.phone,
}));


  return (
    <div>
      <h2>Users</h2>
      <CommonTable headers={headers} data={formattedUsers} />
    </div>
  );
};

export default UserList;
