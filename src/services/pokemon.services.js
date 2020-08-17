import { BASE_URL, IMG_URL } from "../constants";
import { getIdFromUrl } from "../normalize";

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
              const abilities = [];
              pokemon.types.map((type) =>
                types.push({ type: type.type.name, name: type.type.name })
              );
              pokemon.abilities.map((ability) =>
                abilities.push({
                  name: ability.ability.name,
                  isHidden: ability.is_hidden,
                })
              );
              console.log("ability", abilities);
              NORMALIZED_DATA = {
                ...NORMALIZED_DATA,
                name: pokemon.species.name,
                img:
                  `${IMG_URL}${pokemon.id}.png` !== null
                    ? `${IMG_URL}${pokemon.id}.png`
                    : process.env.PUBLIC_URL + "/missing.png",
                stats: {
                  hp: pokemon.stats[0].base_stat,
                  attack: pokemon.stats[1].base_stat,
                  defense: pokemon.stats[2].base_stat,
                  spAttack: pokemon.stats[3].base_stat,
                  spDef: pokemon.stats[4].base_stat,
                  speed: pokemon.stats[5].base_stat,
                },
                abilities: abilities,
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
                  evolutionChain: getIdFromUrl(pokemon.evolution_chain.url),
                };
              })
            )
        );
      }

      reject(console.log(new Error("Failed to fetch some refs")));
    });
  });
export const getPokemonEvolutionChain = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${BASE_URL}evolution-chain/${id}`).then((data) => {
      if (data.ok) {
        resolve(data.json().then((pokemon) => pokemon));
      }
      reject(console.log(new Error("Failed to fetch some refs")));
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
      reject(console.log(new Error("Failed to fetch some refs")));
    });
  });
export const getPokemonsByBoundaries = (limit, offset) => {
  //Needs a Refactor
  return fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`).then(
    (res) =>
      res.json().then((data) => {
        let NORMALIZED_DATA = data.results.map((item) => {
          return fetch(
            `${BASE_URL}pokemon-species/${getIdFromUrl(item.url)}`
          ).then((res) =>
            res.json().then((data) => {
              return {
                name: data.name,
                id: data.id,
                img:
                  IMG_URL + `${data.id}.png`
                    ? IMG_URL + `${data.id}.png`
                    : process.env.PUBLIC_URL + "/missing.png",
              };
            })
          );
        });
        return Promise.all(NORMALIZED_DATA).then((data) => data);
      })
  );
};
