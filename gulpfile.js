// grab our gulp packages
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config'),
    gutil = require('gulp-util');


var BROWSER_SYNC_RELOAD_DELAY = 500;


gulp.task('build-js', function () {
    return gulp.src('meme/js/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build-css', function () {
    console.log('run build css');
    return gulp.src('meme/css/*.css')
        .pipe(gulp.dest('public/css'));
});


//

var steam;

gulp.task('nodemon', function (cb) {
    var called = false;
    steam = nodemon({
        script: './bin/www',
        watch: ['app.js']
    }).on('start', function onStart() {
        if (!called) {
            cb();
        }
        called = true;
    }).on('restart', function onRestart() {
        setTimeout(function reload() {
            browserSync.reload({
                stream: false
            });
        }, BROWSER_SYNC_RELOAD_DELAY)
    });
    return steam;
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync({
        proxy: 'http://localhost:3000',
        port: 8080,
        browser: ['chrome'],
        files: ["public/**/*.*", "views", "routes"],
    });
});

gulp.task('js', function () {
    return gulp.src('public/**/*.js').pipe(webpack({
        module: {
            loaders: [
                {test: /\.vue$/, loader: 'vue'}
            ]
        }
    }))
});

gulp.task('css', function () {
    return gulp.src('public/**/*.css')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('webpack',function(){
    return gulp.src('meme/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('public/build'));
});

//
// gulp.task('build-js',function(){
//     return gulp.src('meme/js/*.js')
//         .pipe(babel({presets:['es2015']}))
//         .pipe(gulp.dest('public/js'));
// });


gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch('public/**/*.js', ['js', browserSync.reload]);
    gulp.watch('public/**/*.js', ['css']);
    gulp.watch('meme/js/*.js', ['build-js']);
    // gulp.watch('meme/main.js',['webpack']);
    gulp.watch('meme/css/*.css', ['build-css']);
    gulp.watch('views/**/*.njk', (event) => {
        steam.emit('restart');
    });
    gulp.watch('routes/*.js', (event) => {
        steam.emit('restart');
    });
});





