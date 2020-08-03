export const getPokemonById = (id) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) =>
      resolve(data.json())
    );
  });

export const getPokemonByName = (name) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) =>
      resolve(
        data.json().then((data) => {
          return [
            {
              name: data.name,
              id: data.id,
              img: data.sprites.front_default,
            },
          ];
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
export const getPokemons = (limit) =>
  new Promise((resolve) => {
    let pokemonList = [];
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((pokemon) => {
          console.log(data);
          fetch(pokemon.url).then((response) =>
            response.json().then((value) => pokemonList.push(value))
          );
        });
      })
      .then(resolve(pokemonList));
  });
