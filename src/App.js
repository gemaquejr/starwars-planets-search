import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterByName from './components/FilterByName';

function App() {
  return (
    <Provider>
      <Table />
      <FilterByName />
    </Provider>
  );
}

export default App;
