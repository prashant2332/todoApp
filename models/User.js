const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const User=mongoose.model('User',userschema)

module.exports=User