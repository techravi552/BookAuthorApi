const express = require("express")
const mongoose = require("mongoose")


const app = express()

app.use(express.json())


app.get("/" , (req , res)=>{
res.send(" LibraryX  Book & Author Management API")
})

app.get("/authors" , async(req , res)=>{
    const authors = await authors.find()
    res.send(authors)
})

app.listen(5000)