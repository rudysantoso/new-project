'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Cart extends Model { }
  Cart.init({
    total_product: DataTypes.STRING,
    total_price: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize
  });
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  Cart.associate = function (models) {
    // define association here
  }
  return Cart;
};