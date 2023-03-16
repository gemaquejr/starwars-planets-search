import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SortBy() {
  const {
    filter,
    setFilter,
    sortColumn,
    setSortColumn,
    sortOr,
    setSortOr,
  } = useContext(PlanetsContext);

  const handleSort = () => {
    setFilter(
      { ...filter,
        order: {
          column: sortColumn,
          sort: sortOr,
        } },
    );
  };

  const handleSortChange = ({ target: { name, value } }) => {
    if (name === 'sortColumn') {
      setSortColumn(value);
    }
    if (name === 'sortOr') {
      setSortOr(value);
    }
  };

  return (
    <div>
      <select
        name="sortColumn"
        value={ sortColumn }
        onChange={ handleSortChange }
        data-testid="column-sort"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          onClick={ handleSortChange }
          value="ASC"
          type="radio"
          name="sortOr"
          id="ASC"
          data-testid="column-sort-input-asc"
          checked={ (sortOr === 'ASC') }
        />
      </label>
      <label htmlFor="DESC">
        Decrescente
        <input
          onClick={ handleSortChange }
          value="DESC"
          type="radio"
          name="sortOr"
          id="DESC"
          data-testid="column-sort-input-desc"
          checked={ (sortOr === 'DESC') }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Ordenar
      </button>
    </div>
  );
}
