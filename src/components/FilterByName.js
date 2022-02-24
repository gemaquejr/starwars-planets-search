import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filter, setFilter } = useContext(PlanetsContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
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
