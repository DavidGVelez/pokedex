export const getPokemonById = (id) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) =>
      resolve(data.json())
    );
  });

export const getPokemonByName = (name) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) =>
      resolve(data.json())
    );
  });

export const getPokemons = (limit, offset) =>
  new Promise((resolve) => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((data) => resolve(data.json()));
  });
