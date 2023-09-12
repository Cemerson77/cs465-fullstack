const fs = require('fs');
const info = JSON.parse(fs.readFileSync('./data/about.json','utf8'));

/* Get About view */
const about = (req, res) => {
    const pageTitle = 'Travlr Getaways - About';
    res.render('about', { title: pageTitle, info});
};

module.exports = {
    about
};