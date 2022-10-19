const axios = require('axios');
const Universities = require('./University');
const connectToDB = require('./connection');

async function getUniversities() {
  const apiUrl = 'http://universities.hipolabs.com/search?country=';
  const countries = ['argentina', 'brazil', 'chile', 'colombia',
    'paraguay', 'peru', 'suriname', 'uruguay'];

  const universities = [];

  const getFromApi = async (country) => {
    try {
      const { data } = await axios.get(`${apiUrl}${country}`);
      data.forEach((university) => universities.push(university));
    } catch (error) {
      console.error(error.response.data);
    }
  };

  await Promise.all(countries.map((country) => getFromApi(country)));
  return universities;
}

connectToDB()
  .then(async () => {
    const universities = await getUniversities();
    await Universities.insertMany(universities);
    console.log('Banco de dados populado.');
    process.exit(0);
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
