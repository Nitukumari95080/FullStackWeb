//mongoose
const mongoose = require('mongoose');
const Chat=require(`./models/chat`)
main()
 .then((res)=>{
    console.log(`Connection succeful`)
 })
 .catch(err => console.log(err));

 async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  
  }

let allChatrts=[
    {
        from:`Dheeraj`,
        to:`Nitu`,
        msg:`shere your resume`,
        created_at:new Date()
    },
    {
        from:`rohi`,
        to:`divyanshu`,
        msg:`shere your notes and result`,
        created_at:new Date()
    },
    {
        from:`mantush`,
        to:`badal`,
        msg:`shere filem name and paisa`,
        created_at:new Date()
    },
    {
        from:`Badal`,
        to:`sneha`,
        msg:`shere you personal details`,
        created_at:new Date()
    },
    {
        from:`Shilpa`,
        to:`Ladu`,
        msg:`shere your gf details`,
        created_at:new Date()
    },
    {
        from:`Rajkumar`,
        to:`khshu`,
        msg:`hello raj kumar kya ho raha h`,
        created_at:new Date()
    },
    {
        from:`Nisha`,
        to:`shilpa`,
        msg:`shere mony and copy and dress`,
        created_at:new Date()
    }
]

Chat.insertMany(allChatrts)


// chat1.save().then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })