//import express
const express=require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose=require("mongoose");
const flash=require("connect-flash");

const session=require("express-session");
const passport=require("passport")
require('./config/passport')(passport);
 // use express
const app=express();
 // connect to mongodb
 mongoose.connect('mongodb://localhost/Auth', { useNewUrlParser: true, 
 useUnifiedTopology: true }).then(() => 
 console.log("Connected to MongoDB successfully!"))
     .catch(err => console.log(err));
 

//EJS 
app.use(expressLayouts);
app.set("view engine",'ejs');

//body parser
app.use(express.urlencoded({extended:true}));
app.use(
  session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
  })
);

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());
  // routes





//Connecting flash 
app.use(flash());

//Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
 // initialize port here
const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server start on port ${PORT}`));