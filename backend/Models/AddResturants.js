const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AddResturantsSchema = new Schema({    
    Name:{
        type:String,
        
    },
    Discription:{
        type:String,
        
    },
    url:{
        type:String,
        
    }
})

const Resturants = mongoose.model("Add",AddResturantsSchema)
module.exports = Resturants