import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/todos`)
      .then(res => res.json())
      .then(setTodos);

    
  }, []);

  return (
    <DataContext.Provider value={{ todos }}>
      {children}
    </DataContext.Provider>
  );
};
