const mongoose = require('mongoose');

main()
 .then((res)=>{
    console.log(`Connection succeful`)
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//create schema
const usrSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User=mongoose.model(`User`,usrSchema);

// User.find({}).then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(error)
// })

//many data return

// User.find({}).then((res)=>{
//     console.log(res[0].name)
//   }).catch((error)=>{
//     console.log(error)
//   })

//condition apply check
  // User.find({age:{$gt:22}}).then((res)=>{
  //   console.log(res)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  //findById se serach
//  User.findById(`6725f6f407a92d4066bb277f`).then((res)=>{
//     console.log(res)
//   }).catch((error)=>{
//     console.log(error)
//   })

//Instert data in models
// const user1=new User({
//   name:`dheeraj`,
//   email:`dheera@gmail.com`,
//   age:24
// })
// const user2=new User({
//   name:`Nitu`,
//   email:`nitu@gmail.com`,
//   age:22
// })


//inserted data in save and save 
// user1.save();
// user2.save().then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// });


//Update value onde

// User.updateOne(
//   {name:`dheeraj`},
//   {age:25},
// ).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

//udatae value many
// User.updateMany(
//   {name:`dheeraj`},
//   {name:`kutta`},
// ).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

//findoneupdate vlue
// User.findOneAndUpdate(
//   {name:`kutta`},
//   {age:45},{new:true}
// ).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

//Delete in mongoose

// User.deleteOne(
//   {name:`kutta`},
// ).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

//delte manay
// User.deleteMany(
//   {age:24},
// ).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

//
 User.findByIdAndDelete(
  '6725f646db77f5cc89e2e2a3',
).then((res)=>{
  console.log(res)
}).catch((error)=>{
  console.log(error)
})