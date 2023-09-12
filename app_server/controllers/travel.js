const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* Get Traveler view */
const travel = (req, res) => {
    const pageTitle = 'Travlr Getaways - Travel';
    res.render('travel', { title: pageTitle, trips});
};

module.exports = {
    travel
};