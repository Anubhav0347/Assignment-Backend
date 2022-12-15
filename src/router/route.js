const express=require("express");
const user=require("../controller/control")
const mid=require("../mid/middleware")
const router=express.Router()

router.post("/user/userCreate",user.createUser)
router.post("/user/userLogIn",user.logInUser)
router.post("/student/add",mid,user.addStudent)
router.put("/student/edit",mid,user.EditStudent)
router.get("/student/viewList",mid,user.viewData)
router.delete("/student/delete",mid,user.deleteStudent)
module.exports=router
