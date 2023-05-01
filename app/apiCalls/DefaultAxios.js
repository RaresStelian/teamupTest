import defaultAxios from 'axios';

const baseURL = 'https://test-api.updivision.work/api/';

export const axiosAuthenticate = defaultAxios.create({
  baseURL,
});
