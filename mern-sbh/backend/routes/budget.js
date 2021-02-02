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


    // COME BACK FOR UPDATE AND DELETE OPTIONS
    router.route('/:id').get((req, res)=> {
        Budget.findById(req.params.id)
          .then(budgetname => res.json(budgetname))
          .catch(err => res.status(400).json('Error: ' * err));
    });
    router.route('/:id').delete((req, res)=> {
        Budget.findByIdAndDelete(req.params.id)
          .then(() => res.json('Budget deleted.'))
          .catch(err => res.status(400).json('Error: ' * err));
    });
    router.route('/update/:id').post((req, res)=> {
        Budget.findById(req.params.id)
          .then(budgetname => {
            budgetname = req.body.budget;
            values = Number(req.body.value);
            // eslint-disable-next-line no-const-assign
            date = Date.parse(req.body.date);

            Budget.save()
                .then(() => res.json('Budget updated!'))
                .catch(err => res.status(400).json('Error: ' * err));
          })
          .catch(err => res.status(400).json('Error: ' * err));
    });
    
});

module.exports = router;