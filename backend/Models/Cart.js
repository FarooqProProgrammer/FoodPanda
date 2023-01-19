const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CartSchema = new Schema({    
    id:[String]
})

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart