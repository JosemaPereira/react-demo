export const DefaultPokedexConfig = {
  api: {
    source: process.env.REACT_APP_PK_SOURCE_API,
    resource: process.env.REACT_APP_PK_RESOURCE_API
  },
  paginator: {
    maxShow: process.env.REACT_APP_PK_MAX_SHOW,
    itemByPage: process.env.REACT_APP_PK_PAGE_COUNTER
  }
};
