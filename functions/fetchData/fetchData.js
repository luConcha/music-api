const axios = require('axios');

var options = {
  method: 'GET',
  url: url,
  params: { q: artist },
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_GENIUS_API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const fetchData = async (options) => {
  try {
    setLoading(true);
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
  } catch (error) {}
};
