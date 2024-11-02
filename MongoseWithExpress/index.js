const express = require('express');
//path requrier
const path= require('path')
//requre chat models
const Chat=require(`./models/chat`)
//mongoose
const mongoose = require('mongoose');
main()
 .then((res)=>{
    console.log(`Connection succeful`)
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

const app=express();
app.set(`views`,path.join(__dirname,`views`));
app.set(`view engine`,`ejs`)
PORT=8000;

app.get(`/`,(req,res)=>{
    res.send(`root is working `)
})

//create route for chats
app.get(`/chats`,async(req,res)=>{
    let chats= await Chat.find();
    console.log(chats)
    res.send(`working`)
})

app.get(`/`,(req,res)=>{
    res.render(`home.ejs`)
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running..${PORT}`)
})