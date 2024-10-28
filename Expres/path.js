const express=require(`express`);

const app=express();

PORT=8080;


app.get(`/`,(req,res)=>{
    res.send(`This is a home page`)
})

//general method
// app.get(`/:username`,(req,res)=>{
//     console.log(req.params)
//     res.send(`This is a home page`)
// })
// app.get(`/:username/:id`,(req,res)=>{
//     let {username,id}=req.params
//     res.send(`Welcome to the page of @${username}`)
// })
app.get(`/:username/:id`,(req,res)=>{
    let {username,id}=req.params
    let htmstr=`<h1>welcome to the page @${username}</h1>`
    res.send(htmstr)
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});