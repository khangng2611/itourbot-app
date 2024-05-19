import { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../utils/tokenStore';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = query ? { ...query } : {};

  const fetchData = async () => {
    setIsLoading(true);
    const token = await getToken();
    const options = {
      method: 'GET',
      url: `${process.env.EXPO_PUBLIC_BASE_API_URL}${endpoint}`,
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.accessToken}`,
      },
    };
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {
    data, isLoading, error, refetch,
  };
};

export default useFetch;
