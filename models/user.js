'use strict';

// var bcrypt   = require('bcrypt-nodejs');


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        display_name: DataTypes.STRING,
        url: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        bio: DataTypes.TEXT,
        job: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: {
            type: DataTypes.ENUM,
            values:['男性','女性']
        },
        relationship: {
            type: DataTypes.ENUM,
            values:['单身','热恋','已婚']
        },
        birthday: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        remember_token: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            generateHash:function (password) {
                return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
            },
            validPassword:function (password) {
                return bcrypt.compareSync(password,this.password);
            }
        }
    });
    return User;
};