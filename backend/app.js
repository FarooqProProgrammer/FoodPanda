import express from "express"
const app = express()


app.get("/",(req,res)=>{
    res.send("Success")
})

app.listen(3100 ,()=>{
    console.log("App is Successfully Lanchef");
})