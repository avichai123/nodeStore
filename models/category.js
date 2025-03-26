const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const Category = sequelize.define('Category' , {
   id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'id',
      primaryKey:true,
      autoIncrement:true
   },
   name:{
      type:DataTypes.STRING,
      field:'name',
      allowNull:false,
   },
 },
 {
   timestamps:false
 }
 
);

module.exports = Category;