const express = require("express")
const cors = require("cors")
const { connection } = require("./Config/db")
const { postJobs, getJobs } = require("./Controllers/jobs.controller")
require("dotenv").config()
const PORT = process.env.PORT || 8080  

const app = express()

app.use(express.json())

app.use(cors())

app.get("/" , (req,res)=>{
    res.send("Welcome to job app backend")
})

app.post("/postjobs", postJobs)

app.get("/jobs" , getJobs)

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("Connection to db is successful")
    }
    catch(err){
        console.log("connection failed")
        console.log(err)
    }
    console.log(`Listening at port ${PORT}`)
});