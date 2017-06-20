'use strict';
module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        user_id: DataTypes.INTEGER,
        slug: DataTypes.STRING,
        title: DataTypes.STRING,
        subtitle:DataTypes.STRING,
        content:DataTypes.TEXT,
        page_image: DataTypes.STRING,
        meta_description: DataTypes.STRING,
        published_at: DataTypes.DATE
    }, {
        classMethods: {
            associate: function (models) {
            }
        }
    });
    return Post;
};