import axios from 'axios';
import { firebaseSetRequestStage } from '../hook/firebaseFetch';
import { localStore, localRetrieve } from './asyncStorage';

const postTours = async (reqBody, item) => {
  const token = JSON.parse(await localRetrieve('ACCESS_KEY'));
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(reqBody),
  };
  try {
    const response = await axios.request(options);
    firebaseSetRequestStage(item, 1);
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      console.log('error.request');
      console.log(error.request);
      throw error.request;
    } else if (error.message) {
      console.log('error.message');
      console.log(error.message);
      throw error.message;
    }
  }
};

const normalLogin = async ({ email, password }) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}auth/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ email, password }),
  };
  try {
    const response = await axios.request(options);
    Promise.all([
      localStore('ACCESS_KEY', JSON.stringify(response.data.token)),
      localStore('USER', JSON.stringify(response.data.user)),
      localStore('LAST_LOGIN', Date.now().toString()),
    ]);
    return true;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      console.log('error.request');
      console.log(error.request);
      throw error.request;
    } else if (error.message) {
      console.log('error.message');
      console.log(error.message);
      throw error.message;
    }
  }
  return false;
};

export { postTours, normalLogin };
