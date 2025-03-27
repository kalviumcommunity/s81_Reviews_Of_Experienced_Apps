const express =require('express')
const app = express();
const port =2204;
app.use(express.json())

const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.mongodb)
.then(()=>{
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log("error connecting to mongodb",err)
})


app.get('/',(req,res)=>{
    res.send('MINNU');
})
//git add.
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})