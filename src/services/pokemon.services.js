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
// NOT WORKING MIGHT DELETE
// export const getPokemonsByBoundaries = (limit, offset) => {
//   const pokemonList = [];
//   fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//   ).then((res) =>
//     res.json().then((data) => {
//       data.results.forEach((item) =>
//         pokemonList.push(
//           getPokemonByUrl(item.url).then((data) => data.PromiseValue)
//         )
//       );
//     })
//   );
//   console.log("lista", pokemonList);
//   return Promise.all(pokemonList).then((resolve) => console.log(resolve));
// };
export const getPokemonsByBoundaries = async (limit, offset) => {
  const url = `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: offset + index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + offset + 1
    }.png`,
  }));

  return pokemon;
};
// TOO SLOW MIGHT DELETE
// export const getPokemons = (limit, offset) => {
//   const pokemonList = [];
//   for (let i = offset; i <= limit; i++) {
//     pokemonList.push(getPokemon(i));
//   }
//   return Promise.all(pokemonList).then((resolve) => resolve);
// };
