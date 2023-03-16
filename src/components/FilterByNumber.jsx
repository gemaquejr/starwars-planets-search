import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterByNumber() {
  const {
    numberFilter,
    setNumberFilter,
    planets,
    setPlanets,
    specifications,
    setSpecifications,
    planetsBackup,
    updatesList,
    setUpdatesList,
    sort,
  } = useContext(PlanetsContext);

  const [currentFilter, setCurrentFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = (event) => {
    const auxState = { ...currentFilter };
    auxState[event.target.name] = event.target.value;
    setCurrentFilter(auxState);
  };

  const pushF = () => {
    const auxState = [...numberFilter];
    auxState.push(currentFilter);
    let auxFilter = [...planets];
    auxState.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        auxFilter = auxFilter.filter(
          (planet) => Number(planet[filter.column]) > Number(filter.value),
        );
      } else if (filter.comparison === 'menor que') {
        auxFilter = auxFilter.filter(
          (planet) => Number(planet[filter.column]) < Number(filter.value),
        );
      } else if (filter.comparison === 'igual a') {
        auxFilter = auxFilter.filter(
          (planet) => Number(planet[filter.column]) === Number(filter.value),
        );
      }
      setPlanets(auxFilter);
      if (numberFilter.length > 0) {
        setSpecifications(specifications.filter(
          (specification) => specification !== filter.column,
        ));
        setCurrentFilter({
          column: specifications[1],
          comparison: 'maior que',
          value: 0,
        });
      } else {
        setPlanets(planetsBackup);
        setSpecifications([
          'population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water',
        ]);
      }
    });
  };

  useEffect(() => {
    pushF();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatesList, sort]);

  const pushFilter = () => {
    const auxState = [...numberFilter];
    auxState.push(currentFilter);
    setNumberFilter(auxState);
    setUpdatesList(!updatesList);
  };

  return (
    <div>
      <select
        value={ currentFilter.column }
        onChange={ handleChange }
        name="column"
        data-testid="column-filter"
      >
        {specifications.map((specification) => (
          <option key={ specification } value={ specification }>
            {specification}
          </option>
        ))}
      </select>
      <select
        value={ currentFilter.comparison }
        onChange={ handleChange }
        name="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        value={ currentFilter.value }
        name="value"
        onChange={ handleChange }
        type="number"
        data-testid="value-filter"
      />
      <button onClick={ pushFilter } data-testid="button-filter" type="button">
        Filtrar
      </button>
    </div>
  );
}
