// var authController = require('../controllers/authcontroller.js');
var users = require('../routes/users');

module.exports = function(app,passport){
    app.get('/signup', users.get('/signup'));
    app.get('/login', users.get('/login'));
    app.get('/dashboard',isLoggedIn, users.get('/dashboard'));
    app.get('/logout',users.get('/logout'));
    app.get('/profile',isLoggedIn, users.get('/profile'));
    app.post('/profile',isLoggedIn,(users.post('/profile')));
    // app.post('/login', passport.authenticate('local-login',  { successRedirect: '/dashboard',
    //     failureRedirect: '/login'}
    // ));

    app.post('/login',function (req, res, next) {
        passport.authenticate('local-login',function (err, user, info) {
            if(err) return next(err)
            if(!user){
                var response = {
                    status:0,
                    msg:'用户不存在',
                    location:'/login'
                }
                return res.json(response);
            }
            req.logIn(user,function (err) {
                if(err){return next(err);}
                var response = {
                    status:1,
                    msg:'登录成功',
                    location:'/dashboard',
                }
                response.user = user;
                return res.json(response);
            });
        })(req, res, next);
    });

    app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
        failureRedirect: '/signup'}
    ));


    function isLoggedIn(req, res, next) {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/login');
        }
    }
}
