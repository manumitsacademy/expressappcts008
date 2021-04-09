var express = require("express");
var router = express.Router();
var students = require("./studentsmock")
router.get("/:pagenumber",(req,res)=>{
    var pn = parseInt(req.params.pagenumber);
    console.log(pn);
    var slicedstudents = students.slice((pn-1)*2,pn*2)
    res.render("studentsmaster",{layout:false,allStudents:slicedstudents})
})
router.get("/studentdetails/:pn",(req,res)=>{
    var filteredStudent = students.find((s,i)=>{
        if(s.phonenumber===req.params.pn){
            return true;
        }
    })
    console.log(filteredStudent)
    res.render("studentdetails",{layout:false,...filteredStudent})
})
module.exports=router;