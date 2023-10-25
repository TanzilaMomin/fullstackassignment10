const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const redmisModel = require("./model/redmisModel");
const vivosModel = require("./model/vivosModel");
const samsungsModel = require("./model/samsungsModel");
const oneplusModel = require("./model/oneplusModel");

mongoose.connect("mongodb://127.0.0.1:27017/mobiledb")
.then(()=>{
    console.log("mongo DB is connected successfully!!!");
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Mobile Names with Their Information ....");
});

app.get("/samsungs", async (req,res)=>{
    const result = await  samsungsModel.find({});
    res.json(result);
});

app.get("/redmis", async (req,res)=>{
    const result = await redmisModel.find({});
    res.json(result);
});

app.get("/oneplus", async (req, res)=>{
    const result = await oneplusModel.find({});
    res.json(result);
});

app.get("/vivos", async (req,res)=>{
    const result = await vivosModel.find({});
    res.json(result);
});

app.listen(5010, ()=>{
    console.log("Sercvice is running on Port 5010....");
});