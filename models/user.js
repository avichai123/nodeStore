const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const bcrypt = require('bcrypt'); 
const User = sequelize.define('User' , {
   id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'id',
      primaryKey:true,
      autoIncrement:true
   },
    firstName:{
      type:DataTypes.STRING,
      field:'first_name',
      allowNull:false,
   },
    lastName:{
    type:DataTypes.STRING,
    field:'last_name',
    allowNull:false,
   },
   password:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'password',
   },
   username:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'username',
    unique:true
   },
   email:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'email',
   }
 },{
    timestamps:true,
    hooks:{
        beforeCreate:async(user) => {
            if(user.password){
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password , salt);
            }
        }
    }
 } 
);

module.exports = User;