import express from "express";
import dotenv from "dotenv"

dotenv.config()
const port = process.env.port || 5000;

const app = express()

app.listen(port,()=>{
    console.log(`Server started in port ${port}`)
})