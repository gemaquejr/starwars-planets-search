import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsAPI from '../services/PlanetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [sort, setSort] = useState({ column: 'population', type: 'asc' });
  const [updatesList, setUpdatesList] = useState(true);
  const [planetsBackup, setPlanetsBackup] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState([]);
  const [specifications, setSpecifications] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filter, setFilter] = useState({
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [sortColumn, setSortColumn] = useState('population');
  const [sortOr, setSortOr] = useState('ASC');

  const getPlanets = async () => {
    const data = await PlanetsAPI();
    if (data) {
      const auxState = data.results.sort((x, z) => x.name > z.name);
      setPlanets(auxState);
      setPlanetsBackup(auxState);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    getPlanets,
    nameFilter,
    setNameFilter,
    numberFilter,
    setNumberFilter,
    specifications,
    setSpecifications,
    planetsBackup,
    updatesList,
    setUpdatesList,
    sort,
    setSort,
    filter,
    setFilter,
    sortColumn,
    setSortColumn,
    sortOr,
    setSortOr,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Provider;
