'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Admin extends Model { }
  Admin.init({
    UserAdmin: DataTypes.STRING,
    Email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize, modelName: "Admin"
  });
  Admin.associate = function (models) {
    // associations can be defined here
  };
  return Admin;
};