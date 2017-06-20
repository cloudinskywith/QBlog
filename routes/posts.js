var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');


router.use(function(req, res, next) {
    isLoggedIn(req,res,next);
});

router.get('/create', function (req, res, next) {
    res.render('posts/create');
});
router.post('/create',function (req, res, next) {
    console.log(req.body);
    console.log(req.user.id);

})


router.get('/update', function (req, res, next) {
    console.log(req.user);
});

router.get('/view',function (req, res, next) {
    console.log('run post profile');
})

router.get('/index', function (req, res, next) {

});


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;

