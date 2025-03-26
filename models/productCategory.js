const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const ProductCategory = sequelize.define('ProductCategory' , {
   productId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'product_id',
      primaryKey:true,
   },
   categoryId:{
      type:DataTypes.INTEGER,
      field:'category_id',
      allowNull:false,
      primaryKey:true
   },
 },
 {
   tableName:'product_category',
   timestamps:false
 }
 
);

module.exports = ProductCategory;