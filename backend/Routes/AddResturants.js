const Resturants = require("../Models/AddResturants")
const Cart = require("../Models/Cart")
const Menu = require("../Models/MenuModel")
const express = require("express")
const Router = express.Router()

Router.get("/",(req,res)=>{
    const users = Resturants.find();

    users.then((data, err) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err)
    });
})
Router.post("/AddResturants",async(req,res)=>{
    const data = req.body
    console.log(data);
    const ResData = new Resturants(data)
    await ResData.save()
    res.send({"Message":"Success"})
})
Router.post("/AddMenu",async(req,res)=>{
    const data = req.body
    console.log(data);
    const ResData = new Menu(data)
    await ResData.save()
    res.send({"Message":"Success"})
})
Router.post("/getMenu",async (req,res)=>{
    const id = req.body.id
    const Data = await  Menu.find({Resturant_id:id})
   
    res.send(Data)
})
Router.delete("/DeleteMenu/:id",async(req,res)=>{
    const deleteMenu = req.params.id
    await Menu.deleteOne({_id:deleteMenu})
    res.send({"Message":"Delete Successfully"}) 
})
Router.post("/CartID",async(req,res)=>{
    const id = req.body
    const ResData = new Cart(id)
    await ResData.save()
    res.send({"Message":"Success"})
})
Router.post("/CartDelete/",async(req,res)=>{
    const id = req.body.id
    await Cart.deleteOne({id:id})
})
Router.post("/CartGet",async(req,res)=>{
    const id = req.body
    console.log(id);
    const users =await Menu.find({
        '_id' : id
    }).select("url");
    console.log(users);
   res.send(users)
})

Router.put("/Update",async(req,res)=>{
   await     Menu.findByIdAndUpdate("63c97df25931e64af15728dd",{"Name": "Chips"})
   res.send("Success")
})
module.exports = Router