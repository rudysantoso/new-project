'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Product extends Model { }
  Product.init({
    merk: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize
  });

  Product.associate = function (models) {
    // define association here
  }
  return Product;
};