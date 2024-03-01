const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    address:String,
    designation:String
})


const UserModel=mongoose.model('Employee',UserSchema)

module.exports={UserModel}