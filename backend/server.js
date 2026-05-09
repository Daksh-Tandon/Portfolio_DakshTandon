import express from "express";
import cors from "cors"
import fs from "fs"
const app=express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000;
app.post('/contacts',(req,res)=>{
    const {name,mail}=req.body;
    if(name && mail){
         const data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
         data.push({
            "name":name,
            "email":mail
         })
         fs.writeFileSync("data.json", JSON.stringify(data))
         res.json({ message: "Saved successfully" })


    }
})

app.get('/content',(req,res)=>{
    const data=fs.readFileSync("content.json","utf-8");
    res.json(JSON.parse(data))
    
})
app.listen(PORT,()=>console.log("server started"))