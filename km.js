let express = require("express");
let app= express();
let port=2000;
// let fs= require("fs");
let morgan =require("morgan");
let routes=require("./routes");
let mongo1=require("mongoose");
let bodyParser=require("body-parser");

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(routes);


mongo1.connect("mongodb://0.0.0.0:27017/school");
const tryy=mongo1.connection;
tryy.on("error",err=>console.error("err"));
tryy.once("open",()=>{
    console.log("RUNNING....")
})









app.listen(port,()=>{
    console.log("servor is running at port: "+port);
}) 