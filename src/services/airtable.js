// @ts-check

require('dotenv').config();
const Airtable = require('airtable');
const apiKey = process.env.API_KEY;

if (apiKey) {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey,
  });

  module.exports = Airtable.base('app65FXp9DU0ec4QE');
} else {
  console.error('*** No API_KEY provided ***');
  module.exports = undefined;
}
