var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');
var pinyin = require('node-pinyin');

router.use(function (req, res, next) {
    isLoggedIn(req, res, next);
});

router.get('/create', function (req, res, next) {
    res.render('posts/create');
});
router.post('/create', function (req, res, next) {
    console.log(req.body);
    console.log(req.user.id);
    var onePost = req.body;
    onePost.user_id = req.user.id;
    if (req.body.slug == '') {
        onePost.slug = pinyin(req.body.title,{
            style: pinyin.STYLE_NORMAL
        }).join('-');
        console.log(onePost.slug);
    }
    models.Post.create(onePost).then(function (post) {
        if(post){
            var response = {
                msg:'文章创建成功',
                location:'/posts/index',
                status:1,
                id:post.id
            }
            res.json(response);
        }
    })
})


router.get('/update', function (req, res, next) {
    console.log(req.user);
});

router.get('/view', function (req, res, next) {
    console.log('run post profile');
})

router.get('/index', function (req, res, next) {
   res.render('posts/index');
});
router.post('/index',function (req, res, next) {
    models.Post.findAll().then(function (data) {
        res.json(data);
    });
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router;

