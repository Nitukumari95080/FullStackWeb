const express = require('express');
const app=express();

//usitng thired parameter next jo hame next pe bhjene ka kam karta hai
// app.use((req,res,next)=>{
//     console.log(`HI I am middleware`);
//     next();
// })

//middleware
// app.use((req,res)=>{
//     console.log(`HI I am middleware`);
//     res.send(`middleware finishid`)
// })


//fixed path -agar hm kisi bhi root ko define kar dete hai  tb alwys time usi root pe hi print hota h middleware baki other root pe print n hota hai middleware
app.use(`random`,(req,res,next)=>{
    console.log(`HI I am middleware`);
    next();
})

app.get(`/`,(req,res)=>{
    res.send(`I am root`)
})

app.get(`/render`,(req,res)=>{
    res.send(`This is a random page`)
})
PORT=8080;
//SERVER LISTER
app.listen(PORT,(req,res)=>{
    console.log(`Server is running${PORT}`)
})