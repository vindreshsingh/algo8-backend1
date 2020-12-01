//import express
const express=require("express");
 // use express
const app=express();
 // initialize port here
const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server start on port ${PORT}`));