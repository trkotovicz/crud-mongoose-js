const mongoose = require('mongoose');

const mongodbURI = 'mongodb://localhost:27017/Bis2Bis';

const connectToDB = () => mongoose.connect(mongodbURI);

module.exports = connectToDB;
