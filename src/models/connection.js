require('dotenv').config();
const mongoose = require('mongoose');

const mongodbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/api';

const connectToDB = () => mongoose.connect(mongodbURI);

module.exports = connectToDB;