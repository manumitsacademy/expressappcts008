var express = require("express");
const { MongoClient } = require("mongodb");
var router = express.Router();
var students = require("./studentsmock")
var mongoClient = require("mongodb").MongoClient;

router.get("/getAllStudents",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",
    { useUnifiedTopology: true },function(err,client){
        var db = client.db('cts')
        if(err){
            console.log(err)
        }
        else{
            db.collection('cts').find().toArray().then((data)=>{
                res.json(data)
            })
        }        
    })
})
router.get("/addStudent",(req,res)=>{
    res.sendFile(__dirname+"/addStudent.html")
})
router.post("/addStudent",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",
    { useUnifiedTopology: true },function(err,client){
        var db = client.db('cts')
        if(err){
            console.log(err)
        }
        else{
            db.collection('students').insertOne(req.body).then((data)=>{
                res.json(data)
            })
        }        
    })
})
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