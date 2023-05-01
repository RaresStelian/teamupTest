import {retrieveUserSession} from '../utils';
import {axiosAuthenticate} from './DefaultAxios';

const configRegister = {
  headers: {
    Accept: 'application/json',
  },
};
const configLogin = {
  headers: {
    Accept: 'application/json',
  },
};

const getConfigList = async () => {
  const token = await retrieveUserSession();
  const result = {
    headers: {Accept: 'application/json', Authorization: `Bearer ${token}`},
  };
  return result;
};

export const registerUser = async ({
  name,
  email,
  password,
  password_confirmation,
  education_start_date,
  education_end_date,
  terms,
}) => {
  const response = await axiosAuthenticate.post(
    'register',
    {
      name,
      email,
      password,
      password_confirmation,
      education_start_date,
      education_end_date,
      terms,
    },
    configRegister,
  );
  return response.data;
};

export const loginUser = async ({email, password}) => {
  const response = await axiosAuthenticate.post(
    'login',
    {
      email,
      password,
    },
    configLogin,
  );
  return response.data;
};

export const getList = async () => {
  try {
    const config = await getConfigList();
    const response = await axiosAuthenticate.get('products', config);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
