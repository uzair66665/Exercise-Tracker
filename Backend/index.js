const exp=require('express')
const mongoose=require('mongoose')
const bodyPsrser=require('body-parser')
const model=require('./Model')
const cors=require("cors");

const app=exp();
const PORT=4000;
app.use(bodyPsrser.json())
app.use(cors())


mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/ExerciseDB',{
    useNewUrlParser:true
})

mongoose.connection.once('open',()=>{
    console.log('DB Connected')
})

app.listen(PORT, ()=>{
    console.log("Port Is Connected at "+PORT)
})

//APi to set the data in dp
app.post('/set',(req,res)=>{
    const data=model(req.body)
    data.save()
    .then((used)=>{
        res.send(used)
    }).catch((err)=>{
        console.log("Api Failed")
    })
})

//APi to show all the data from db
app.get('/show',async (req,res)=>{
    const data=await model.find({});
    res.send(data)
})

//Api to update data in db
app.post('/update',async (req,res)=>{
    //const data1=Datab(req.body)
    let usr=await model.findOneAndUpdate({ _id : req.body._id},{$set:req.body})
    .then((used)=>{
        res.send(used)
    }).catch((err)=>{
        console.log("Api Failed")
    })
})

//Api to delete data by id
app.delete('/del/:id',async(req,res)=>{
    await model.findByIdAndDelete({_id:req.params.id})
    .then(()=>{
        res.json({ message: "Data Deleted" })
    }).catch((err)=>{
        console.log("Api Failed")
    })
})