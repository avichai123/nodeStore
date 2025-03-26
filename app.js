const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const {sequelize} = require('./utils/database');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');
const session =  require('express-session');
const SequelizeStore = require('express-session-sequelize')(session.Store);

const {isLoggedIn} = require('./middlewares/authMiddleware');
app.use(cookieParser());
var sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval:15 * 60 * 1000,
  expiration: 7 * 24 * 60 * 60 * 1000
});

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie:{secure:false,
    expires: new Date(Date.now() + 360000)
  }
}));
app.use(cors());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(isLoggedIn);
app.use('/' ,authRoutes);
app.use('/products', productRoutes);

app.get('/',(request , response , next) =>{
    const data = {title: 'Home page'}
    response.json(data);
    response.end();
});
app.use((request ,response , next) => {
  next({status:404 ,message:'sorry this page not exist'})
});
app.use((error, request , response , next)=>{
   response.status(error.status).json({status:error.status , error:error.message});
   response.end();
});
app.listen(PORT ,async() => {
   console.log('serever started');
   try{
     await sequelize.authenticate();
     console.log('connection has been started :)');
   }catch(error){
    console.log('connection faild :(');
   }
})