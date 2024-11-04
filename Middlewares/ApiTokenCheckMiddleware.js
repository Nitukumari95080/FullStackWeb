const express = require('express');
const app=express();

//Api Token as Auery String-> Lets create a middleware for an api that checks if the access token was passed in the query string or not

app.get(`/`,(req,res)=>{
    res.send(`I am root`)
})
//create token middleware
app.use(`/api`,(req,res,next)=>{
    let {token}=req.query;
    if(token===`giveaccess`){
        next();
    }
    res.send(`ACCESS DENITED`)
})
//create api root
app.get(`/api`,(req,res)=>{
    res.send(`data`)
})
PORT=8080;
//SERVER LISTER
app.listen(PORT,(req,res)=>{
    console.log(`Server is running${PORT}`)
})