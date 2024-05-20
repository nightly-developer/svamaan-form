const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express(); 
const dotenv = require('dotenv').config({path: '.env'})


app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send({fn:"vaibhav"})
    res.end()
})

app.post('/',(req,res)=>{
    const requestData = req.body; // Correct variable name
  console.log("Request Data:", req.body); // Correct log statemen
    res.json({message: 'POST request received successfully'})
})
app.listen(5000,() => {console.log("listening on port 5000....")})