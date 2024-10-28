const express=require(`express`);

const app=express();

PORT=8000;



//diff routes(jyda use is tarah se hota hai)
app.get(`/`,(req,res)=>{
    res.send(`This is a home page`)
})
app.get(`/register`,(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard GET response .Welcome ${user}`)
})
app.get(`*`,(req,res)=>{
    res.send(`This  path is not exists`)
})

//post req
app.post(`/register`,(req,res)=>{
    res.send(`stander POST response`)
})


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});