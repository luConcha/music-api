import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);
  const [artist, setArtist] = useState('avril lavigne');
  const [url, setURL] = useState('https://genius.p.rapidapi.com/search');
  setArtist(urlParams);

  var url_final = {
    method: 'GET',
    url: url,
    params: { q: artist },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_GENIUS_API_KEY,
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
  }, []);

  return { isLoading, error, data };
};

export default useFetch;
