import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query, session) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = query ? { ...query } : {};
  const headers = session ?
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.token.accessToken}`,
    } : {
      'Content-Type': 'application/json',
    };
  const options = {
    method: 'GET',
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}${endpoint}`,
    headers,
    params
  };
  const fetchData = async () => {
    setIsLoading(true);
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
