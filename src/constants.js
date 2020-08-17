export const BASE_URL = "https://pokeapi.co/api/v2/";
export const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
export const MAX_LIMIT = 893;
export const REGIONS = {
  kanto: { limit: 151, offset: 0 },
  jhotto: { limit: 100, offset: 151 },
  hoenn: { limit: 135, offset: 251 },
  sinnoh: { limit: 107, offset: 386 },
  teselia: { limit: 156, offset: 493 },
  kalos: { limit: 72, offset: 649 },
  alola: { limit: 86, offset: 721 },
  // galar: { limit: 83, offset: 808 },
};
