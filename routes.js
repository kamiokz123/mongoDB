const express=require("express");
const routes=express.Router();
const model=require("./schema");



routes.post("/add",(r,s)=>{
    model.insertMany([{name:r.body.name,
    id:r.body.id}])
    s.send(r.body)
})

routes.post("/delete",(r,s)=>{
    model.deleteOne({name:r.body.name}).exec()
    s.send(r.body)
})

routes.post("/update",(r,s)=>{
    model.findOneAndUpdate({name:r.body.name},{$set:{id:r.query.roll}}).exec()
    s.send(r.body)
})



module.exports = routes