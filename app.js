
var express = require('express');
var app = express();

//setting for template engine
var exphbs  = require('express-handlebars');
app.engine('hbs',exphbs());
app.set('view engine', 'hbs');
//template engine setting completed

var abcroutes = require('./abcroutes')
var studentroutes = require("./studetroutes")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/",function(req,res){
    console.log("Request received....")
    res.send("Welcome to Web application development by Express")
})
app.use("/abc",abcroutes);
app.use("/students",studentroutes)

app.get("/home",(req,res)=>{
    res.render("home",{layout:false,myname:'praveen'})
})

app.get("**",(req,res)=>{
    res.send("You dont have access to this route")
})
app.listen(9090,()=>{console.log("web application running on 9090")})