
const Abcd=require('../models/emp')
const UserEmp={
    empPost:async(req,res)=>{
        try {
            const {title,message,creator,tags,selectedFile,likeCount}=req.body
            const post=new Abcd({
                title,message,creator,tags,selectedFile,likeCount
            })
            const newPost=await post.save()
            res.status(200).send(newPost)
            
        } catch (error) {
            res.status(400).send(error)
            
        }

    },
    empGet:async(req,res)=>{
        try {
            const user= await Abcd.find()
            res.status(200).send(user)
            
        } catch (error) {
            res.status(400).send(error)
            
        }
    },
    empUpdate:async(req,res)=>{
       
        const {title,message,creator,tags,selectedFile,likeCount}=req.body
        
       const updatedPost=await  Abcd.findOneAndUpdate({_id:req.params.id},{title,message,creator,tags,selectedFile,likeCount},{new:true})
       res.json(updatedPost)

    }, 
     empDelete:async(req,res)=>{
        
        try {
            
       await  Abcd.findOneAndDelete({_id:req.params.id})
       console.log("deleted")
       res.json("delete success")

        } catch (error) {
            res.status(400).send(error)
            
        }

       
        
    }


    
}

module.exports=UserEmp