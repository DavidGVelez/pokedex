import { BASE_URL } from "../constants";
import "../normalize";

export const getPokemonByUrl = (url) =>
  new Promise((resolve) => {
    fetch(url).then((data) => resolve(data.json().then((data) => data)));
  });

export const getPokemon = (value) =>
  new Promise((resolve, reject) => {
    let NORMALIZED_DATA = {};
    fetch(`${BASE_URL}pokemon/${value}`).then((data) => {
      if (data.ok) {
        resolve(
          data
            .json()
            .then((pokemon) => {
              const types = [];
              pokemon.types.map((type) =>
                types.push({ type: type.type.name, name: type.type.name })
              );
              NORMALIZED_DATA = {
                ...NORMALIZED_DATA,
                name: pokemon.species.name,
                img: pokemon.sprites.front_default,
                stats: {
                  hp: pokemon.stats[0].base_stat,
                  attack: pokemon.stats[1].base_stat,
                  defense: pokemon.stats[2].base_stat,
                  spAttack: pokemon.stats[3].base_stat,
                  spDef: pokemon.stats[4].base_stat,
                  speed: pokemon.stats[5].base_stat,
                },
                height: pokemon.height,
                weight: pokemon.weight,
                types: types,
              };
            })
            .then(() => fetch(`${BASE_URL}pokemon-species/${value}`))
            .then((data) =>
              data.json().then((pokemon) => {
                return {
                  ...NORMALIZED_DATA,
                  eggGroup: pokemon.egg_groups.map((item) => item.name),
                  flavorText: pokemon.flavor_text_entries[0].flavor_text,
                  captureRate: pokemon.capture_rate,
                  hatchSteps: pokemon.hatch_counter,
                  genderRate: pokemon.gender_rate,
                };
              })
            )
        );
      }

      reject(() => console.log(data.error));
    });
  });
export const getPokemonSpeciesData = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${BASE_URL}pokemon-species/${id}`).then((data) => {
      if (data.ok) {
        resolve(
          data.json().then((pokemon) => {
            return {
              eggGroup: pokemon.egg_groups.map((item) => item.name),
              flavorText: pokemon.flavor_text_entries[0].flavor_text,
              captureRate: pokemon.capture_rate,
              hatchSteps: pokemon.hatch_counter,
            };
          })
        );
      }
      reject(() => console.log(data.error));
    });
  });
// export const getPokemonsByBoundaries = async (limit, offset) => {
//   var asdf = [];
//   await fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//   ).then((res) =>
//     res.json().then((data) => {
//       data.results.forEach((item) => {
//         asdf.push(fetch(item.url).then((data) => data.json()));
//       });
//     })
//   );

//   return await Promise.all(asdf).then((values) => {
//     const PokemonList = [];
//     values.forEach((item) => {
//       PokemonList.push({
//         name: item.species.name,
//         id: item.id,
//         img: item.sprites.front_default,
//       });
//     });
//     return PokemonList;
//   });
// };
// OPTION 2
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
