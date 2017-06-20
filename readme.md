### 准备环境
```
express -f
npm install
npm install mysql sequelize --save
npm install mysql2 --save
npm install ejs --save
```

### 准备数据库
```
>mysql -uroot -p
>create database q_blog_development charset=utf8;

sequelize init
// sequelize model:create --name Task --attributes title:string,done:boolean
```

### User页面
```
sequelize model:create --name User --attributes display_name:string
```

sequelize db:migrate:undo:all
sequelize db:migrate

```
// models/user.js
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    display_name: DataTypes.STRING,
    url:DataTypes.STRING,
    address:DataTypes.STRING,
    city:DataTypes.STRING,
    country:DataTypes.STRING,
    bio:DataTypes.TEXT,
    job:DataTypes.STRING,
    phone:DataTypes.STRING,
    gender:{
      type:DataTypes.ENUM,
      defaultValue:'男性'
    },
    relationship:{
      type:DataTypes.ENUM,
      defaultValue:'已婚'
    },
    birthday:DataTypes.Date,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    remember_token:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};

// migrations/create-user.js
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_name: {
        type: Sequelize.STRING
      },
      url:{
        type:Sequelize.STRING
      },
      address:{
        type:Sequelize.STRING
      },
      city:{
        type:Sequelize.STRING
      },
      country:{
        type:Sequelize.STRING
      },
      bio:{
        type:Sequelize.TEXT,
      },
      job:{
        type:Sequelize.STRING
      },
      phone:{
        type:Sequelize.STRING
      },
      gender:{
        type:Sequelize.ENUM,
        values:['男性','女性']
      },
      relationship:{
        type:Sequelize.ENUM,
        values:['单身','热恋','已婚']
      },
      birthday:{
        type:Sequelize.DATE
      },
      email:{
        type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
      remember_token:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
```




### User的CRUD
```
// 一个是探索下vue的service render
// 一个是使用webpack和vue

npm install babel-loader webpack --save-dev
touch webpack.config.js

//参考文章 http://ccoenraets.github.io/es6-tutorial/setup-webpack/
babel-preset-es2015
npm install babel-core

// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:'./meme/js/main.js',
  output:{
    path:path.resolve(__dirname,'public/build'),
    filename:'frontend.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      }
    ]
  },
  stats:{
    colors:true
  },
  devtool:'source-map'
}
```

### 使用vue和iview
npm install vue  --save
npm install iview --save
npm install jquery --save
```
import Vue from 'vue';
import iview from 'iview'
import $ from 'jquery';

Vue.use(iview);
window.$ = $;
```

修改一下下，然后进行下配置，详情请见meme/iview目录




### socket.io 
```
npm install socket.io --save

html中手动添加文件socket.io.js


//服务器段 socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection',(socket)=>{
    socket.emit('news',{hello:'world'});
    socket.on('my-other-event',function(data){
        console.log(data);
    });
    setInterval(function(){
        socket.emit('news',{hello:'world'});
    },2000);
});
server.listen(8080);


// 浏览器段
<script src="js/socket.io.js"></script>
<script>
    var socket = io.connect('http://localhost:8080');
    socket.on('news',data=>{
        console.log('some thing here');
        console.log(data);
    })
</script>
```

### 最终决定使用nunjucks作为模板引擎
// https://mozilla.github.io/nunjucks/cn/api.html
可以使用任意文件后缀作为nunjucks文件名，推荐使用*.njk，我选择了html
```
//模版引擎
var nunjucks = require('nunjucks');

nunjucks.configure('views',{
    autoescape:true,
    express: app,
    cache:false
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',nunjucks.render);
app.set('view engine', 'html');
```

### 配置nodemon实现高效开发
```
// package.json
命令行参数 -e
    "start": "nodemon -e .js,.html ./bin/www "

```



### 使用gulp
npm install --global gulp
npm install --save-dev gulp-utilnpm install --save-dev gulp-util
npm install --save gulp-babel
npm install babel-preset-es2015 --save-dev


```

// gulpfile.js
// grab our gulp packages
// grab our gulp packages
var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});


gulp.task('build-js',function(){
    return gulp.src('meme/raw/*.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch',['build-js'],function(){
    gulp.watch('meme/raw/*.js',['build-js']);
});




// package.json
"watch":"gulp watch"
```



### 页面自动刷新
npm install gulp --save
npm install babel --save
npm install browserSync --save
npm install gulp-nodemon --save
```
// grab our gulp packages
var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util');


var BROWSER_SYNC_RELOAD_DELAY = 500;



gulp.task('build-js',function(){
    return gulp.src('meme/raw/*.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(gulp.dest('public/js'));
});


//

var steam;

gulp.task('nodemon',function(cb){
    var called = false;
    steam = nodemon({
        script:'./bin/www',
        watch:['app.js']
    }).on('start',function onStart(){
        if(!called){cb();}
        called= true;
    }).on('restart',function onRestart(){
        setTimeout(function reload(){
            browserSync.reload({
                stream:false
            });
        },BROWSER_SYNC_RELOAD_DELAY)
    });
    return steam;
});

gulp.task('browser-sync',['nodemon'],function(){
    browserSync({
        proxy:'http://localhost:3000',
        port:8080,
        browser:['chrome'],
        files:["public/**/*.*","views","routes"],
    });
});

gulp.task('js',function(){
    return gulp.src('public/**/*.js')
});

gulp.task('css',function () {
    return gulp.src('public/**/*.css')
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bs-reload',function () {
    browserSync.reload();
});

gulp.task('default',['browser-sync'],function(){
    gulp.watch('public/**/*.js',['js',browserSync.reload]);
    gulp.watch('public/**/*.js',['css']);
    gulp.watch('meme/raw/*.js',['build-js']);
    gulp.watch('views/*.njk',(event)=>{
        steam.emit('restart');
    })
});
```


### 准备注册和登录部分
```
https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
```

### 富文本编辑器
MyEditor 
npm install --save vue-template-compiler quill css-loader 


### 文件上传 ajax

npm i -S formidable
sudo npm install node-uuid






