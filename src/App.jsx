import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import RemoveFiltered from './components/RemovedFiltered';
import Sort from './components/Sort';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByNumber />
      <Sort />
      <RemoveFiltered />
      <Table />
    </Provider>
  );
}

export default App;
