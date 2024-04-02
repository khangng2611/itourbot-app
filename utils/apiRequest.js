import axios from 'axios';
import { firebaseSetRequestStage } from '../hook/firebaseFetch';

const postTours = async (reqBody, item, session) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${session.token.accessToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(reqBody),
  };
  try {
    await axios.request(options);
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
    signIn({
      ...response.data,
      lastLogin: Date.now().toString(),
    });
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

const oauthLogin = async (platform) => {
  const options = {
    method: 'GET',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}auth/${platform}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data;
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

export { postTours, normalLogin, oauthLogin };
