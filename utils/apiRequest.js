import axios from 'axios';
import { getToken, storeToken } from './tokenStore';

export const register = async ({ name, email, password }) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}auth/register`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ name, email, password }),
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      const errData = error.response.data;
      if (errData.code === 409) {
        const [errors] = errData.errors;
        const [message] = errors.messages;
        errData.message = message;
      }
      throw errData;
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

export const normalSignIn = async ({ email, password }, signIn) => {
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
    signIn(response.data);
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

export const refreshToken = async () => {
  const token = await getToken();
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}auth/refresh-token`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      email: token.email,
      refreshToken: token.refreshToken
    }),
  };
  try {
    const response = await axios.request(options);
    storeToken({
      ...response.data,
      email: token.email
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

const getValidToken = async () => {
  const token = await getToken();
  const validTime = Date.parse(token.expiresIn) - Date.now();
  // check if accessToken is expired in 5mins
  if (validTime > 300000) return token;
  await refreshToken(token.email);
  return await getToken();
}

export const addTour = async (fromStation, toStation) => {
  const token = await getValidToken();
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      fromStation,
      toStation: toStation.sort((a, b) => a - b),
    }),
  };
  try {
    const response = await axios.request(options);
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
  return false;
};

export const updateTourStatus = async (tourId, status) => {
  const token = await getValidToken();
  const options = {
    method: 'PATCH',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      id: tourId,
      status,
    }),
  };
  try {
    await axios.request(options);
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

export const searchStation = async (searchTerm) => {
  const token = await getValidToken();
  const options = {
    method: 'GET',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}stations/search`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
    params: {
      searchTerm,
    },
  };
  try {
    const response = await axios.request(options);
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

