const User = require('../models/user');
const bcrypt = require('bcrypt'); 
const sequelize = require('sequelize');


const register = async (request, response , next) => {    
    try{
        const {firstName , lastName , password , username , email} = request.body;
        const existingUser = await User.findOne({
            where:{
                username:username
            }
        })
        if(existingUser){
            response.json({message:"user already exist"});
            response.end();  
            return;
        }
        await User.create({
           firstName,
           lastName,
           username,
           password,
           email
        });
        response.status(201).json({message:"user register succsefuly"});
        response.end();
    }catch(e){
       response.status(501).json({ message: "Internal server error" });
       response.end();
    }
}

const logIn = async (request, response , next) => {
    try{
        const {usernameOremail , password} = request.body;
        const user = await User.findOne({
            where:{
                [sequelize.Op.or]:{
                    username:usernameOremail,
                    email:usernameOremail
                }
            }
        });
        if(!user){
            return response.status(401).json({message:"invalid username or password"});      
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return response.status(401).json({message:"invalid username or password"});      
        }
        request.session.isLoggedin = true;
        response.redirect(302, '/');
    }
    catch(e){
        next({message:e , status:501});
    }

}

module.exports = {
    register,
    logIn
}