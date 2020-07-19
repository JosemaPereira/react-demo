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

export const paginator = currentPage => {
  const maxPagination = 3;
  let paginationArray = [];
  const {
    paginator: { itemByPage, maxShow }
  } = DefaultPokedexConfig;
  const finalPage = Math.ceil(maxShow / itemByPage);
  let pagResutl = { array: [], showNext: false, showPrev: false };

  if (currentPage < maxPagination) {
    for (let i = 1; i <= maxPagination + 1; i += 1) {
      paginationArray.push(i);
    }
    paginationArray.push('...');
    paginationArray.push(finalPage);
    pagResutl = {
      array: paginationArray,
      showNext: true,
      showPrev: false
    };
  }

  if (
    currentPage >= maxPagination &&
    currentPage <= finalPage - maxPagination
  ) {
    const offset = Math.floor(maxPagination / 2);
    paginationArray = [1, '...'];

    for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
      paginationArray.push(i);
    }
    paginationArray.push('...');
    paginationArray.push(finalPage);

    pagResutl = {
      array: paginationArray,
      showNext: true,
      showPrev: true
    };
  }

  if (currentPage === finalPage || currentPage > finalPage - maxPagination) {
    paginationArray = [1, '...'];

    for (let i = finalPage - maxPagination; i <= finalPage; i += 1) {
      paginationArray.push(i);
    }

    pagResutl = {
      array: paginationArray,
      showNext: false,
      showPrev: true
    };
  }
  return pagResutl;
};
