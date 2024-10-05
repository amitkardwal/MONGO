const mongoose=require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=>{
console.log("connection sucessfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//schema.....
const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    age: Number,
});

//models....
const User = mongoose.model("User",userSchema);
//const Employee = mongoose.model("Employee",userSchema);

//insert....
const user1 =new User({
    name:"adam",
    email : "adamtref@gmail.com",
    age : 48,
});

user1.save();

const user2 =new User({
    name:"eve",
    email : "evetref@gmail.com",
    age : 48,
});

user2.save().then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


//insertmany....

User.insertMany([
    {name:"amit",email : "amitkarwdal329@gmail.com",age : 18},
    {name:"hrsh",email : "harshdkjsl329@gmail.com",age : 30},
    {name:"karan",email : "karannratirwl@gmail.com",age : 50},
]).then((res)=>{
    console.log(res);
});


//FIND....

User.find({}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


//UPDATE.... 

User.updateOne(
    {name:"karan"},{age:60}
).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


//DELETE....
User.deleteOne({name:"hrsh"}).then((res)=>{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
});
