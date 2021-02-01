const router = require("express").Router();
const Budget = require("../models/budgetdb.js");

router.post("/controllers/budget", ({body}, res) => {
  Budget.create(body)
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/controllers/budget/bulk", ({body}, res) => {
  Budget.insertMany(body)
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/controllers/budget", (req, res) => {
  Budget.find({}).sort({date: -1})
    .then(dbBudget => {
      res.json(dbBudget);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;