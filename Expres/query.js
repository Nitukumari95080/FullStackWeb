const express=require(`express`);

const app=express();

PORT=8090;

app.get(`/`,(req,res)=>{
    res.send(`This is a home page`)
})
app.get(`/search`,(req,res)=>{
    res.send(`This is a home page`)
})

app.get(`/search`,(req,res)=>{
    console.log(req.query);
    res.send(`no result`)
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});