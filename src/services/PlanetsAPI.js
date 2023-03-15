const PLANETS_API = 'https://swapi.dev/api/planets/';

const getPlanets = async () => {
  const response = await fetch(PLANETS_API);
  const data = await response.json();
  return data;
};

export default getPlanets;
