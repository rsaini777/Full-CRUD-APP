const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
   title:String,
   message:String,
   creator:String,
   tags:[String],
   selectedFile:{
       
       String,
   },
   likeCount:{
       type:Number,
       default:0
   },
  
    
},{timestamps:true})

module.exports=mongoose.model('Abcd',UserSchema);