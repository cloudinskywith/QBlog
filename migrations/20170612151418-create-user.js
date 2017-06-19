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