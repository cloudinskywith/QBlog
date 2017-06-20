// var authController = require('../controllers/authcontroller.js');
var users = require('../routes/users');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var uuid = require('node-uuid');
var pinyin = require('node-pinyin');

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

    // app.post('/signup',function (req, res, next) {
    //     passport.authenticate('local-signup',function (err, user, info) {
    //         if(err) return next(err)
    //         if(user){
    //             var response = {
    //                 status:0,
    //                 msg:'用户已存在，请登录',
    //                 location:'/login'
    //             }
    //             return res.json(response);
    //         }else{
    //             var response = {
    //                 status:1,
    //                 msg:'注册成功，请登录',
    //                 location:'/login'
    //             }
    //             return res.json(response);
    //         }
    //     })(req, res, next);
    // });

    app.get('/upload',function (req, res, next) {
        console.log(pinyin('我说你好'));
        var slug = pinyin('你说你好');
        console.log(slug.join('-'));
        res.render('upload');
        // res.send('ok');
    });


    app.post('/upload',function(req,res){
        var form = new formidable.IncomingForm();
        form.parse(req);
        var image_path;
        var image_name;
        form.on('fileBegin',function (name, file) {
            var uploadpath = path.join(__dirname + '/..');
            // file.path = uploadpath + '/public/upload/' + file.name;
            image_name = uuid.v4();
            file.path = uploadpath + '/public/upload/' + image_name + '.jpg';
        });
        form.on('file',function (name, file) {
            console.log(file);
            var response = {
                status:1,
                msg:'上传成功',
                path:'/upload/' + image_name + '.jpg'
            };
            res.json(response);
        });
    });


    function isLoggedIn(req, res, next) {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/login');
        }
    }
}
