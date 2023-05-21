const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bookMyTripServer',{useNewUrlParser:true})

const User =mongoose.model('User',{
    id:String,
    image:String,
    name:String,
    place:String,
    rate:Number,
    description:String
    })
    const Register = mongoose.model('Register',{
        username:String,
        password:String,
        Email:String
    })
    const LoginUser = mongoose.model('LoginUser',{
        email:String,
        username:String,
        password:String
    })
    module.exports={
        User,Register,LoginUser
    }