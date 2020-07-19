import { DefaultPokedexConfig, HttpClient } from '../providers';

export const getList = page => {
  const { itemByPage } = DefaultPokedexConfig;
  const lastItem = itemByPage * (page - 1);
  const limit = lastItem + itemByPage;
  const list = [];

  for (let i = lastItem + 1; i <= limit; i++) {
    list.push(i);
  }

  return list;
};

export const getInfoList = async idList => {
  const {
    api: { source, resource }
  } = DefaultPokedexConfig;
  const pokemonRequest = `${source}${resource}`;
  let pokemonList = [];
  await Promise.all(
    idList.map(async pokemon => {
      const {
        data: {
          id,
          name,
          abilities,
          sprites: { front_default },
          types
        }
      } = await HttpClient.get(`${pokemonRequest}/${pokemon}`);
      pokemonList.push({
        id,
        name,
        abilities: abilities.sort((a, b) => a.slot - b.slot),
        front_default,
        types: types.sort((a, b) => a.slot - b.slot)
      });
    })
  );

  return pokemonList.sort((a, b) => a.id - b.id);
};
