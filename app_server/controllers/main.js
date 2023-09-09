/* Get home view */
const index = (req, res) => {
    const pageTitle = 'Travlr Getaways - Home';
    res.render('index', { title: pageTitle});
};

module.exports = {
    index
};