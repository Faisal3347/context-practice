import React from 'react';
import { DataProvider } from './context/DataContext';
import UserList from './components/UserList';

function App() {
  return (
    <DataProvider>
      <div style={{ padding: '20px' }}>
        <UserList />
      </div>
    </DataProvider>
  );
}

export default App;
