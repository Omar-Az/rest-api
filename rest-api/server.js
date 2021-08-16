const express = require("express")
const bodyparser = require("body-parser")
const cors= require("cors")
const port=3000


// controllers
const users = require('./controllers/userController')


const app = express()

app.use(cors())

app.use(bodyparser.json())
app.use('/users',users)
app.listen(port,function(){
    console.log("server started at port "+ port)
})


app.get('/',function(req,res){
    res.send("Your server started at port "+ port)
})
