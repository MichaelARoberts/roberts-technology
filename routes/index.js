var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skills' });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Resources' });
});

module.exports = router;
