const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const ProductImage = sequelize.define('ProductImage' , {
   productId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'product_id',
      primaryKey:true
   },
   url:{
      type:DataTypes.STRING,
      field:'url',
      allowNull:false,
      primaryKey:true
   },
 },
 {
   tableName:'product_images',
   timestamps:false
 }
);

module.exports = ProductImage;