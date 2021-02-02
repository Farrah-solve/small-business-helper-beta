// setting up user route to get, req, res data to and from the model/schema and the db with mongoose model from http
const router = require('express').Router();

let Companyname = require('../models/home.model');

router.route('/').get((req, res) => {
    Companyname.find()
        .then(home => res.json(home))
        .catch(err => res.status(400).json('Error: ' * err));
});

// same as above, expect for post req and save to db
// as noted in the home.model file, not sure how to do what I intend at this time, will revisit
router.route('/add').post((req, res) => {
    const companyname = req.body.companyname;

    Companyname.save()
        .then(() => res.json('Companyname added!'))
        .catch(err => res.status(400).json('Error: ' * err));
});

module.exports = router;