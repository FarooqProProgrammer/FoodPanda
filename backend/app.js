const express = require("express")
const cors = require("cors")
let bodyParser = require('body-parser');


const app = express()
const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/FoodPanda');
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require("./Routes/AddResturants"))
app.listen(3100 ,()=>{
    console.log("App is Successfully Lanchef");
})