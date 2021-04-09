var express = require("express");
var router = express.Router();
var students = require("./studentsmock")
router.get("/",(req,res)=>{
    res.json(students)
})
router.get("/:pn",(req,res)=>{
    var filteredStudent = students.find((s,i)=>{
        if(s.phonenumber===req.params.pn){
            return true;
        }
    })
    console.log(filteredStudent)
    res.render("studentdetails",{layout:false,...filteredStudent})
})
module.exports=router;