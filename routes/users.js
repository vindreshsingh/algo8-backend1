// import express
const express = require('express');

 // import express-router for router strategy
const router = express.Router();

//import auth controllers 
const authController=require("../controllers/authControllers");
 
 //------------ Welcome Route ------------//
router.get('/login', (req, res) => {
    res.render('login');
});
//register page
router.get('/register', (req, res) => {
    res.render('register');
});
// login handle
router.post('/login',authController.loginHandle);
//register handle
router.post("/register",authController.registerHandle)
// Email ACTIVATE Handle 
router.get('/activate/:token', authController.activateHandle);
router.get("/logout",authController.logoutHandle);
router.post("/forgot",authController.forgotPassword);
router.get('/forgot', (req, res) => res.render('forgot'));
router.get('/reset/:id', (req, res) => {
    res.render('reset', { id: req.params.id })
});

router.get("/forgot/:token",authController.gotoReset);
router.post("/reset/:id",authController.resetPassword);
module.exports=router;