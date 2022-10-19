const axios = require('axios');
const Universities = require('../models/University');

const apiUrl = 'http://universities.hipolabs.com/search?country=';
const countries = ['argentina', 'brasil', 'chile', 'colombia',
'paraguai', 'peru', 'suriname', 'uruguay'];

const main = async () => {
  const universities = [];

  const getFromApi = async (country) => {
    try {
      const { data } = await axios.get(`${apiUrl}${country}`);
      universities.push(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  await Promise.all(countries.map((country) => getFromApi(country)));
  console.log(universities);
  
  await Universities.insertMany(universities);
};

main();
