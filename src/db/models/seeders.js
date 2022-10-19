require('dotenv').config();
const mongoose = require('mongoose');
const main = require('../data/fetchApi');

const mongodbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Bis2Bis';

const connectToDB = () => mongoose.connect(mongodbURI)
  .then(() => {
    main();
  }).process.exit(0);

module.exports = connectToDB;