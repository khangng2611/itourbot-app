import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${process.env.EXPO_PUBLIC_BASE_API_URL}${endpoint}`,
    headers: {
      // "X-RapidAPI-Key": 'b83305817fmsh78752dfc540aa41p1eb43fjsne7c5be230ee8',
      // "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.request(options);
      // setData(response.data.data);
      
      // MOCKUP 
      let responseData = [
        {
          "id": 1,
          "station" : 1,
          "name" : "Sculptures Zone",
          "rating": "4.8",
          "img": "https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688575.jpg?t=st=1710172708~exp=1710176308~hmac=377b726a9e481ade9fdadd664f1cc30f057ebbdb0142472e0eded3495983ac69&w=740"
        },
        {
          "id": 2,
          "station" : 1,
          "name" : "Painting Zone",
          "rating": "5.0",
          "img":"https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688575.jpg?t=st=1710172708~exp=1710176308~hmac=377b726a9e481ade9fdadd664f1cc30f057ebbdb0142472e0eded3495983ac69&w=740"
        },
        {
          "id": 3,
          "station" : 1,
          "name" : "Fossil Zone",
          "rating": "4.8",
          "img":"https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688575.jpg?t=st=1710172708~exp=1710176308~hmac=377b726a9e481ade9fdadd664f1cc30f057ebbdb0142472e0eded3495983ac69&w=740"
        }
      ];
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
