import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/todos`)
      .then(res => res.json())
      .then(setTodos);

    fetch(`${BASE_URL}/users`)
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <DataContext.Provider value={{ todos, users }}>
      {children}
    </DataContext.Provider>
  );
};
