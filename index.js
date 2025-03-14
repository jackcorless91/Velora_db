const express = require("express")
const mongoose = require("mongoose")

const userRouter = require("./src/routes/userRouter")

const app = express()

app.use(express.json())

// app.get("/", (req, res) => {
//     res.json({
//         data: "stinky test"
//     })
// })

app.use("/users", userRouter)

app.listen(3000, async () => {
    console.log("server started")
    await mongoose.connect("mongodb://127.0.0.1:27017/velora_db")
    console.log("database connected")
})