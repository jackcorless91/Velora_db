const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.get("/", (req, res) => {
    res.json({
        data: "stinky test"
    })
})

app.listen(3000, async () => {
    console.log("server started")
    await mongoose.connect("mongodb://127.0.0.1:27017/velora_db")
    console.log("database connected")
})