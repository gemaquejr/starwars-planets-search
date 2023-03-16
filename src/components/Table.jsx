import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { planets, nameFilter } = useContext(PlanetsContext);
  const { filter } = useContext(PlanetsContext);

  const sortUnknown = (sortedPlanets) => {
    const unknownS = [];
    if (filter.order.culumn !== 'name') {
      sortedPlanets.forEach((element) => {
        if (element[filter.order.column] === 'unknown') {
          unknownS.push(element);
        }
      });
      sortedPlanets = sortedPlanets.filter((e) => e[filter.order.column] !== 'unknown');
      unknownS.forEach((el) => {
        sortedPlanets.push(el);
      });
    }
    return sortedPlanets;
  };

  const sortPlanets = () => {
    const one = 1;
    const minusOne = -1;
    let sortedPlanets;
    if (filter.order.column === 'name') {
      planets.sort(
        (a, b) => ((a.name < b.name) ? one : minusOne),
      );
    }
    if (filter.order.sort === 'ASC') {
      sortedPlanets = planets.sort(
        (a, b) => (
          (Number(a[filter.order.column])
            > Number(b[filter.order.column])) ? one : minusOne
        ),
      );
    } else if (filter.order.sort === 'DESC') {
      sortedPlanets = planets.sort(
        (a, b) => (
          (Number(a[filter.order.column])
            > Number(b[filter.order.column])) ? minusOne : one
        ),
      );
    }
    sortedPlanets = sortUnknown(sortedPlanets);
    return sortedPlanets;
  };

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
        {sortPlanets().filter((planet) => planet.name.toUpperCase()
          .includes(nameFilter.toUpperCase()))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))}
      </table>
    </div>
  );
}
