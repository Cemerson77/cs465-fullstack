const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/meals.json','utf8'));

/* Get Meals view */
const meals = (req, res) => {
    const pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', { title: pageTitle, food});
};

module.exports = {
    meals
};