const express = require('express')
const bodyparser= require("body-parser")
const cors=require("cors")
const port=3000


//controller
const users= require('./controllers/userController')
//the import function mentioned in 
//the userContorller.js will sent 
//all the data in the above variable 'users'



const app=express()
app.use(cors())

app.use(bodyparser.json())
app.use('/user',users)
app.listen(port,function(){
    console.log("Server started at port" + port)
})
    //localhost:3000
app.get('/',function(req,res){
    res.send("Server is running")
})