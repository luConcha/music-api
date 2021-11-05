import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import useFech from './useFetch';

//var axios = require('axios').default;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [artist, setArtist] = useState('avril lavigne');
  const [url, setURL] = useState('https://genius.p.rapidapi.com/search');
  const api_key = '3007d27694mshd6b4161ccca2a8dp1f69d8jsn317c805b559e';
  //const { isLoading, error, data: songs } = useFech({ artist });
  //console.log(artist);
  var options = {
    method: 'GET',
    url: url,
    params: { q: artist },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': api_key,
    },
  };

  const fetchData = async (options) => {
    setLoading(true);
    console.log(options);
    const response = await axios(options).catch((err) => console.log(err));
    if (response) {
      const data = response.data.response.hits;
      if (data.length > 0) {
        setHits(data);
        setError({ show: false, msg: '' });
        setLoading(false);
      } else {
        setError({ show: true, msg: data.Error });
      }
    }
  };

  useEffect(() => {
    fetchData(options);
  }, [artist]);

  return (
    <AppContext.Provider
      value={{ loading, error, hits, artist, setArtist, setURL }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
