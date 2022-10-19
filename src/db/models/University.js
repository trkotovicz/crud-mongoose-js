/* eslint-disable camelcase */
const { mongoose } = require('mongoose');

const universitySchema = mongoose.Schema({
  alpha_two_code: {
    type: String,
  },
  country: {
    type: String,
  },
  domains: {
    type: Array,
  },
  name: {
    type: String,
  },
  state_province: {
    type: String,
  },
  web_pages: {
    type: Array,
  },
});

const Universities = mongoose.model('Universities', universitySchema);

module.exports = Universities;