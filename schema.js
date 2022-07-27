 const mongo1=require("mongoose");

schema=mongo1.Schema({
    name:{type:String},
    id:{type:Number}
})

const model=mongo1.model("teachers",schema);



 module.exports=model