const express=require(`express`);

const app=express();

PORT=8000;

//all req ke liy same path 
// app.use((req,res)=>{
//     //console.log(`request received..`)
//     res.send(`this is a firs req send`)
// })

//diff routes(jyda use is tarah se hota hai)
app.get(`/`,(req,res)=>{
    res.send(`This is a home page`)
})
app.get(`/contact`,(req,res)=>{
    res.send(`This is a contact page`)
})
app.get(`/About`,(req,res)=>{
    res.send(`This is a About page`)
})
app.get(`*`,(req,res)=>{
    res.send(`This  path is not exists`)
})

//post req
app.post(`/`,(req,res)=>{
    res.send(`This is a post home page`)
})


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});