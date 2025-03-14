const express = require("express")

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController")

const userRouter = express.Router()

// GET - /users
userRouter.get("/", async (req, res) => {
    const users = await getUsers()
    res.json(users)
})

// GET single user - /user/id
userRouter.get("/:userId", async (req, res) => {
    const user = await getUser(req.params.userId)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ error: `User with id ${req.params.userId} not found` })
    }
})

// POST - /user
userRouter.post("/", async (req, res) => {
    const bodyData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number
    }
    const newUser = await createUser(bodyData)
    res.json(newUser)
})

// PATCH - /user/id
userRouter.patch("/:userId", async (req, res) => {
    const bodyData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number
    }
    const updatedUser = await updateUser(req.params.userId, bodyData)
    if (updatedUser) {
        res.json(updatedUser)
        console.log(`User with id ${req.params.userId} updated successfully`)
    } else {
        res.status(404).json({ error: `User with id ${req.params.userId} not found` })
    }
})
// *** console is logging, user is updating but on get request no update ***

// DELETE - /user/id
userRouter.delete("/:userId", async (req, res) => {
    const deletedUser = await deleteUser(req.params.userId)
    if (deletedUser) {
        res.json(deletedUser)
        console.log(`User with id ${req.params.userId} deleted successfully`)
    } else {
        res.status(404).json({ error: `User with id ${req.params.userId} not found` })
    }
})

module.exports = userRouter