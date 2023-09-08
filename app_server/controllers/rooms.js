const fs = require('fs');
const booking = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

/* Get rooms view */
const rooms = (req, res) => {
    const pageTitle = 'Travlr Getaways - Rooms';
    res.render('rooms', { title: pageTitle, booking});
};

module.exports = {
    rooms
};