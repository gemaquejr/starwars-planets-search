import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumber() {
  const {
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
  } = useContext(PlanetsContext);

  const filterNumbers = () => {
    let searchFilter;

    if (comparison === 'maior que') {
      searchFilter = stateA
        .filter((planet) => Number(planet[column]) > Number((numericValue)));
    }
    if (comparison === 'menor que') {
      searchFilter = stateA
        .filter((planet) => Number(planet[column]) < Number((numericValue)));
    }
    if (comparison === 'igual a') {
      searchFilter = stateA
        .filter((planet) => Number(planet[column]) === Number((numericValue)));
    }
    setStateA(searchFilter);
  };

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumber: [
        {
          column,
          comparison,
          numericValue,
        },
      ],
    });
    filterNumbers();
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Colunas:
        <select
          id="column-filter"
          name="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ (element) => setColumn(element.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          id="comparison-filter"
          name="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (element) => setComparison(element.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Filtragem:
        <input
          id="value-filter"
          name="value-filter"
          data-testid="value-filter"
          type="number"
          value={ numericValue }
          onChange={ (element) => setNumericValue(element.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Executar Filtragem
      </button>
    </div>
  );
}

export default FilterByNumber;
