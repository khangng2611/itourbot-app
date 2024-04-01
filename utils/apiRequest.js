import axios from 'axios';
import { firebaseSetRequestStage } from '../hook/firebaseFetch';
import { localStore, localRetrieve } from './asyncStorage';

const postTours = async (reqBody, item, session) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${session.data.token.accessToken}`,
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

const normalLogin = async ({ email, password }, signIn) => {
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
    const sessionData = {
      data: response.data,
      lastLogin: Date.now().toString(),
    }
    signIn(sessionData);
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
