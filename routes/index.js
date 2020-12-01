// import express
const express = require('express');

 // import express-router for router strategy
const router = express.Router();
 
 //------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.send('welcome');
});
module.exports=router;