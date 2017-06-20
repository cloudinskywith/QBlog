var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');
var bcrypt = require('bcrypt');

// require('../config/passport')(passport, User);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    res.render('users/login');
    //   res.send('ok to go.');
});



router.get('/profile', function (req, res, next) {
    console.log(req.user);
    // res.render('users/profile', {
    //     user: req.user
    // });
    res.render('users/profile');
});

router.post('/profile',function (req, res, next) {
    console.log('run post profile');
    res.json(req.user);
})

router.get('/logout', function (req, res, next) {
    console.log(req);
    // req.logout();
    // req.redirect('/');
    // res.send('ok');
    req.session.destroy(function(err){
        res.redirect('/');
    })
});

router.get('/signup', function (req, res, next) {
    res.render('users/signup');
});

router.get('/dashboard',function(req,res,next){
    res.render('users/dashboard');
})



router.get('/all',function (req, res, next) {
    models.User.findAll().then(function (data) {
        return res.json(data);
    })
})



module.exports = router;
