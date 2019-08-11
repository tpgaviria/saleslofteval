const axios = require('axios');
require('dotenv').config();

module.exports = {
    getPeopleData: function (req, res) {
        const KEY = process.env.API_KEY;
        axios.get(`https://api.salesloft.com/v2/people.json`,
            { headers: { 'Authorization': 'Bearer ' + KEY } })
            .then(results => res.json(results.data))
            .catch(err => console.log('Error retrieving people data: ' + err));
    }
}