// requiring and using dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connecting to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    process.env.MONGODB_URI || 'mongodb://localhost/sbh-b',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully")
    })
    
    // importing routes
  const userRouter = require('./routes/user');
  const homeRouter = require('./routes/home');
  const budgetRouter = require('./routes/budget');

  app.use('/user', userRouter);
  app.use('/home', homeRouter);
  app.use('/budget', budgetRouter);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});