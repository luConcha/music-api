const axios = requiere('axios');

var axios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/search',
  params: { q: 'Kendrick Lamar' },
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '3007d27694mshd6b4161ccca2a8dp1f69d8jsn317c805b559e',
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
