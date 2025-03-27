const express =require('express')
const app = express();
const port =2204;

app.get('/',(req,res)=>{
    res.send('MINNU');
})
//git add.
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})