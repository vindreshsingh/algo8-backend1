// import express
const express = require('express');
const { ensureAuthenticated } = require('../config/checkAuth')

 // import express-router for router strategy
const router = express.Router();
 
 //------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));
module.exports=router;