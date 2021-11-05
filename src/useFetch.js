import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);
  // const [artist, setArtist] = useState('avril lavigne');
  const [url, setURL] = useState('https://genius.p.rapidapi.com/search');
  const api_key = '3007d27694mshd6b4161ccca2a8dp1f69d8jsn317c805b559e';
  console.log(urlParams);
  var url_final = {
    method: 'GET',
    url: url,
    params: { q: urlParams },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': api_key,
    },
  };

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios(url).catch((err) => console.log(err));
      if (response) {
        const data = response.data.response.hits;
        if (data.length > 0) {
          setData(data);
          console.log(data);
          setError({ show: false, msg: '' });
        } else {
          setError({ show: true, msg: data.Error });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url_final);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
