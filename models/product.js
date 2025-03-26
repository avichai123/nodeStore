const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const ProductImage = require('./productImage');
const Category = require('./category');
const ProductCategory = require('./productCategory');
const Product = sequelize.define('Product' , {
   id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
   },
   name:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'name'
   },
   price:{
      type:DataTypes.INTEGER,
      field:'price',
      allowNull:false
   },
   description:{
      type:DataTypes.TEXT,
      defaultValue:'',
      field:'description'
   },
   quantity:{
     type:DataTypes.INTEGER,
     field:'quantity',
     allowNull:false
   },
   isDeleted:{
      type:DataTypes.BOOLEAN,
      field:'is_deleted',
      allowNull: false,
      defaultValue: 0
   }
 },
//  {
//    timestamps:false
// }
);
Product.hasMany(ProductImage, {
   foreignKey:'productId',
   as:'images'
});

Product.belongsToMany(Category , {
   through:ProductCategory,
   foreignKey:'productId',
   otherKey:'categoryId',
   as:'categories'
});

module.exports = Product;