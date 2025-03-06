const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    deviceType:{
        type:String,
        required:true,
    },
    modle:{
        type:String,
        required:true
    }
    
})


let UserModel=mongoose.model("user",UserSchema)


module.exports={UserModel}