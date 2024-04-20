import axios from 'axios';

const register = async ({ name, email, password }) => {
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

const addTour = async (fromStation, toStation, session) => {
  const options = {
    method: 'POST',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${session.token.accessToken}`,
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

const updateTourStatus = async (tourId, status, session) => {
  const options = {
    method: 'PATCH',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
    headers: {
      Authorization: `Bearer ${session.token.accessToken}`,
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

const searchStation = async (text, session) => {
  const options = {
    method: 'GET',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}stations/search`,
    headers: {
      Authorization: `Bearer ${session.token.accessToken}`,
      'Content-Type': 'application/json',
    },
    params: {
      text,
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
}

export {
  register, normalLogin, addTour, updateTourStatus, searchStation
};
