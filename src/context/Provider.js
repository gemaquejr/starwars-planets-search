import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsApi from '../services/PlanetsAPI';

function Provider({ children }) {
  const [stateA, setStateA] = useState([]);
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
