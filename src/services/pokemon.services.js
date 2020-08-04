import { BASE_URL } from "../constants";

export const getPokemonByUrl = (url) =>
  new Promise((resolve) => {
    fetch(url).then((data) => resolve(data.json().then((data) => data)));
  });

export const getPokemon = (value) =>
  new Promise((resolve) => {
    fetch(`${BASE_URL}pokemon/${value}`).then((data) =>
      resolve(
        data.json().then((pokemon) => {
          return {
            name: pokemon.name,
            id: pokemon.id,
            img: pokemon.sprites.front_default,
          };
        })
      )
    );
  });
export const getPokemonsByBoundaries = async (limit, offset) => {
  var asdf = [];
  await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) =>
    res.json().then((data) => {
      data.results.forEach((item) => {
        asdf.push(fetch(item.url).then((data) => data.json()));
      });
    })
  );

  return await Promise.all(asdf).then((values) => {
    const PokemonList = [];
    values.forEach((item) => {
      PokemonList.push({
        name: item.species.name,
        id: item.id,
        img: item.sprites.front_default,
      });
    });
    return PokemonList;
  });
};
// OPTION 2
// export const getPokemonsByBoundaries = async (limit, offset) => {
//   const url = `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   const pokemon = data.results.map((data, index) => ({
//     name: data.name,
//     id: offset + index + 1,
//     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//       index + offset + 1
//     }.png`,
//   }));

//   return pokemon;
// };
