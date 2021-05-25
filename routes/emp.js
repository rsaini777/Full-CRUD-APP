const express =require("express")
const route=express.Router()
const UserEmp=require('../controllers/emp')

route.post('/post',UserEmp.empPost)
route.get('/post',UserEmp.empGet)
route.patch('/post/:id',UserEmp.empUpdate)
route.delete('/post/:id',UserEmp.empDelete)




module.exports=route