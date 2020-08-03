export const getPokemonByUrl = (url) =>
  new Promise((resolve) => {
    fetch(url).then((data) =>
      resolve(
        data.json().then((pokemon) => {
          console.log(pokemon);
          return {
            name: pokemon.name,
            id: pokemon.id,
            img: pokemon.sprites.front_default,
          };
        })
      )
    );
  });

export const getPokemon = (value) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then((data) =>
      resolve(
        data.json().then((data) => {
          return {
            name: data.name,
            id: data.id,
            img: data.sprites.front_default,
          };
        })
      )
    );
  });

export const getPokemonsByBoundaries = (limit, offset) =>
  new Promise((resolve) => {
    const pokemonList = [];
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) =>
      res.json().then((data) => {
        console.log("data", data);
        data.results.map((item) => {
          fetch(item.url).then((pokemon) =>
            pokemon.json().then((value) => {
              console.log("pokemon", value);
              pokemonList.push({
                name: value.name,
                img: value.sprites.front_default,
                id: value.id,
              });
            })
          );
        });
        // .then(() => resolve (pokemonList)));
      })
    );
  });
export const getPokemons = (limit) => {
  const pokemonList = [];
  for (let i = 1; i <= limit; i++) {
    pokemonList.push(getPokemon(i));
  }
  return Promise.all(pokemonList).then((resolve) => resolve);
};
