var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
=======

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
>>>>>>> 13f19138957b3181845e6de22177d0de0264e1db
