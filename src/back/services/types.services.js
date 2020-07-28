export const getTypeById = (id) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/type/${id}`).then((data) =>
      resolve(data.json())
    );
  });

export const getTypeByName = (name) =>
  new Promise((resolve) => {
    fetch(`https://pokeapi.co/api/v2/type/${name}`).then((data) =>
      resolve(data.json())
    );
  });
