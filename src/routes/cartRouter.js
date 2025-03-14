const express = require("express")

const {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
} = require("../controllers/cartController")

const cartRouter = express.Router()

// GET - /cart
cartRouter.get("/", async (req, res) => {
    const carts = await getCarts()
    res.json(carts)
})

// GET a single cart - /cart/id
cartRouter.get("/:cartId", async (req, res) => {
    const cart = await getCart(req.params.cartId)
    if (cart) {
        res.json(cart)
    } else {
        res.status(400).json({ error: `Cart with id ${req.params.cartId} not found` })
    }
})

// POST -/cart
cartRouter.post("/", async (req, res) => {
    const bodyData = {
        product_id: req.body.product,
        user_id: req.body.user_id
    }
    const newCart = await createCart(bodyData)
    res.json(newCart)
})

// PATCH - /cart/id
cartRouter.patch("/:cartId", async (req, res) => {
    const bodyData = {
        product_id: req.body.product,
        user_id: req.body.user_id
    }
    const updatedCart = await updateCart(req.params.cartId, bodyData)
    if (updatedCart) {
        res.json(updatedCart)
        console.log(`cart with id ${req.params.cartId} updated successfully`)
    } else {
        res.status(404).json({ error: `cart with id ${req.params.cartId} not found` })
    }
})

// DELETE - /cart/id
cartRouter.delete("/:cartId", async (req, res) => {
    const deletedCart = await deleteCart(req.params.cartId)
    if (deletedCart) {
        res.json(deletedCart)
        console.log(`Cart with id ${req.params.cartId} deleted successfully`)
    } else {
        res.status(404).json({ error: `Cart with id ${req.params.cartId} not found` })
    }
})


module.exports = cartRouter