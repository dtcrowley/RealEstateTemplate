var express = require("express");

var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html');
});

router.get('/gallery', function(req, res) {
    res.render('gallery.html');
});

router.get('/floorplan', function(req, res) {
    res.render('floorplan.html');
});

router.get('/details', function(req, res) {
    res.render('details.html');
});

router.get('/contactus', function(req, res) {
    res.render('contactus.html');
});

export default router;