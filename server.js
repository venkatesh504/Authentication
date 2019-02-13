const express = require('express')
console.log("welcome to server")
const app = express()

app.get('/madhu',(req,res)=>{
    return res.send("Welcome")
})

app.listen(2222, () => {
    console.log("sever is listening");
})