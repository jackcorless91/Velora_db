const express = require("express")

const {
    getUsers
} = require("../controllers/userController")

const userRouter = express.Router()

// GET - /users
userRouter.get("/", async (req, res) => {
    const users = await getUsers()
    res.json(users)
})

module.exports = userRouter