const express = require("express")

const {
    getWishlist
} = require("../controllers/wishlistController")

const productRouter = express.Router()

// GET - /wishlist
productRouter.get("/", async (req, res) => {
    const wishlists = await getWishlist()
    res.json(wishlists)
})

module.exports = productRouter