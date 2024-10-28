const express=require(`express`)
const app=express();
const path=require(`path`)

PORT=3030;

//set ejs 
app.set(`view engine`,`ejs`)
//local run ke liy code
app.set(`views`,path.join(__dirname,`/views`))

//only check running server ejs doesnot send use render
// app.get(`/`,(req,res)=>{
//     res.send(`this is home`)
// })
app.get(`/`,(req,res)=>{
    res.render(`home.ejs`)
})
// app.get(`/rolldice`,(req,res)=>{
//     res.render(`rolldice.ejs`)
// })
//assume random value database se aa raha to any variable me data strore kara ke
app.get(`/rolldice`,(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1
    res.render(`rolldice.ejs`,{num:diceVal})
})

app.get(`/ig/:username`,(req,res)=>{
    const followers=[`adam`,`dheeraj`,`Nitu`,`shilpa`]
    let {username}=req.params
    //console.log(username)
    res.render(`instagram.ejs`,{username,followers})
})


//json data access
// app.get(`/id/:username`,(req,res)=>{
//     const instData=require(`./data.json`)
//     let {username}=req.params
//     const data=instData[username]
//     console.log(instData)
//     res.render(`insatagram.ejs`,{data})
// })
app.listen(PORT,()=>{
    console.log(`server is running port:${PORT}`)
})