const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const data={
    name:String,
    desc:String,
    activity:String,
    time:Number,
    date:String
}

const datamodel=mongoose.model('exercise',data);
module.exports=datamodel