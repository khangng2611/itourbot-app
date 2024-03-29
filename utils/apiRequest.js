import axios from 'axios';
import { firebaseSetRequestStage } from '../hook/firebaseFetch';

const postTours = async (reqBody, item) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours/mockup`,
    headers: {
      // "Authorization": `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(reqBody),
  };
  try {
    const response = await axios.request(options);
    console.log(response);
    firebaseSetRequestStage(item, 1);
  } catch (e) {
    throw new Error(e.message);
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
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
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
