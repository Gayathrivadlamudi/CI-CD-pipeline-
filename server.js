import express from "express";
import sum from "./sum.js";

const app=express();
app.listen(8000,()=>{
    console.log("server is listening");
})
app.get("/home",async(req,res)=>{
    res.json({
        msg:"this is home"
    });
})
app.get("/getsum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    });
})