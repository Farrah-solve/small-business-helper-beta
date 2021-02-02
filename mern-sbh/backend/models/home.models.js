const mongoose = require('mongoose');
// This schema is for the homepage that will be displayed for the user to show they have logged into their account
// with their company name as a header above buttons directing them to additional html pages
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    companyname: { type: String, required: true },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;