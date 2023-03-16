import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);

  const handleChange = (event) => {
    let auxNameFilter = nameFilter;
    auxNameFilter = event.target.value;
    setNameFilter(auxNameFilter);
  };

  return (
    <div>
      <label htmlFor="planets-name">
        <input
          id="planets-name"
          name="planets-name"
          type="text"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default FilterByName;
