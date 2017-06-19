// var authController = require('../controllers/authcontroller.js');
var users = require('../routes/users');

module.exports = function(app,passport){
    app.get('/signup', users.get('/signup'));
    app.get('/login', users.get('/login'));
    app.get('/dashboard',isLoggedIn, users.get('/dashboard'));
    app.get('/logout',users.get('/logout'));

    app.post('/login', passport.authenticate('local-login',  { successRedirect: '/dashboard',
        failureRedirect: '/login'}
    ));
    app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
        failureRedirect: '/signup'}
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}
