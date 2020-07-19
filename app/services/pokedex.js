import { DefaultPokedexConfig, HttpClient } from '../providers';

export const getList = page => {
  const {
    paginator: { itemByPage, maxShow }
  } = DefaultPokedexConfig;
  const lastItem = parseInt(itemByPage, 10) * (page - 1);
  let limit = lastItem + parseInt(itemByPage, 10);
  const list = [];
  limit = limit > maxShow ? maxShow : limit;

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
  const pokemonList = [];
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
