const mongoose = require("mongoose")
const Schema = mongoose.Schema
const MenuSchema = new Schema({    
    Name:{
        type:String,
    },
    Discription:{
        type:String,
    },
    url:{
        type:String,
    },
    Resturant_id:String
})

const Menu = mongoose.model("Menu",MenuSchema)
module.exports = Menu