// import express
const express = require('express');

 // import express-router for router strategy
const router = express.Router();
 
 //------------ Welcome Route ------------//
router.get('/login', (req, res) => {
    res.send('welcome to login page');
});
router.get('/register', (req, res) => {
    res.send('welcome to register page');
});
module.exports=router;