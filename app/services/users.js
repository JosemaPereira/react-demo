import { HttpClient, DefaultUsersConfig } from '../providers';

export const getUsersPage = async page => {
  const {
    api: { source, resource }
  } = DefaultUsersConfig;

  const request = `${source}${resource}?page=${page}`;
  const { data } = await HttpClient.get(request);

  return data;
};

export const getUsersProfile = async id => {
  const {
    api: { source, resource }
  } = DefaultUsersConfig;

  const request = `${source}${resource}/${id}`;
  const { data } = await HttpClient.get(request);

  return data;
};
