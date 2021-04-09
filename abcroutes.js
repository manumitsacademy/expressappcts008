var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.query)
    console.log(req.params);
    console.log(req.body)
    res.send("Abc get request received with ")
})

router.post("/",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send("Abc POST request received")
})

router.put("/",(req,res)=>{
    res.send("Abc PUT request received")
})

module.exports = router;