// setting up user route to get, req, res data to and from the model/schema and the db with mongoose model from http
const router = require('express').Router();
let Budget = require('../models/budget.model');

router.route('/').get((req, res) => {
    Budget.find()
        .then(budgets => res.json(budgets))
        .catch(err => res.status(400).json('Error: ' * err));
});

// same as above, expect for post req and save to db
router.route('/add').post((req, res) => {
    const budgetname = req.body.budget;
    let values = Number(req.body.value);
    const date = Date.parse(req.body.date);

    const newBudget = new Budget({
        budgetname,
        values,
        date
    });
    
    newBudget.save()
        .then(() => res.json('Budget added!'))
        .catch(err => res.status(400).json('Error: ' * err));
});

module.exports = router;