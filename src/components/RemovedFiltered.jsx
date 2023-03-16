import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function RemoveFiltered() {
  const {
    numberFilter,
    setNumberFilter,
    setPlanets,
    planetsBackup,
  } = useContext(PlanetsContext);

  const clearFilters = () => {
    setNumberFilter([]);
    setPlanets(planetsBackup);
  };

  return (
    <div>
      {numberFilter.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value} `}
        </div>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearFilters }
      >
        Remover filtros
      </button>
    </div>
  );
}
