require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const router = require("./router/index");
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',router);
app.use(express.static('public'))


const start = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
            })
        app.listen(PORT,()=>{console.log(`Servet started on PORT= ${PORT}`)})
    }catch(e){
        console.log(e)

    }
}
start()