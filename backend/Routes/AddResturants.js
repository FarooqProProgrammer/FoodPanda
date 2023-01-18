const Resturants = require("../Models/AddResturants")
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

module.exports = Router