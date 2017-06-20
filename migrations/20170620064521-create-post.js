'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            slug: {
                type: Sequelize.STRING
            },
            subtitle:{
                type:Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            page_image: {
                type: Sequelize.STRING
            },
            content:{
                type: Sequelize.TEXT
            },
            meta_description: {
                type: Sequelize.STRING
            },
            published_at: {
                type: Sequelize.DATE
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Posts');
    }
};