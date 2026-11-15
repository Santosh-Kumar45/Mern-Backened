const mongoose = require('mongoose');


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//Models

const User=mongoose.model("User", userSchema);


//Delete
User.findByIdAndDelete({ _id: '6ae5bc55c866c170c94fc882'})
  .then((res)=>{
    console.log(res);
  });

//update
// User.findOneAndUpdate({_id: '6ae5b58ab59edaf70e1d9471'},{age:40},{new :true})
//    .then((res)=>{
//     console.log(res);
//    })
//    .catch((err)=>{
//     console.log(err);
//    });

// User.find({age: {$gt:47}})
//    .then((res)=>{
//     console.log(res);
//    })
//    .catch((err)=>{
//     console.log(err);
//    });


// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"Bruce",email:"bruce@gmail.com",age:47},
// ]).then((date)=>{
//     console.log(date);
// });  



//inserting data into db
// const user1=new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:48,
// });
// const user2=new User({
//     name:"Eve",
//     email:"eve@google.com",
//     age:48,
// });

// user1.save();
// user2.save();


