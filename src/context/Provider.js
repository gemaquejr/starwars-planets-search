import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsApi from '../services/PlanetsAPI';

function Provider({ children }) {
  const [stateA, setStateA] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que', 'menor que', 'igual a');
  const [numericValue, setNumericValue] = useState('0');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumber: [],
    },
  });

  useEffect(() => {
    const getAPI = async () => {
      const response = await PlanetsApi();
      setStateA(response.results);
    };
    getAPI();
  }, []);

  const context = {
    stateA,
    setStateA,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    numericValue,
    setNumericValue,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
