'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model { }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  })
  User.associate = function (models) {
    // define association here
  }
  return User;
};
