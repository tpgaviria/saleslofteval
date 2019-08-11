const router = require('express').Router();
const apiController = require('../../controllers/apiController.js');

router.route('/api/people')
    .get(apiController.getPeopleData);

    module.exports = router;